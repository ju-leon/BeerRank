package com.jungemeyer.leon;

import com.jungemeyer.leon.Exceptions.EntryDoesNotExistException;
import com.jungemeyer.leon.Exceptions.FalseInputException;
import com.jungemeyer.leon.Exceptions.GameStateException;
import com.jungemeyer.leon.database.GameRepository;
import com.jungemeyer.leon.database.UserRepository;
import com.jungemeyer.leon.model.Game;
import com.jungemeyer.leon.model.GameState;
import com.jungemeyer.leon.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@SpringBootApplication
@RestController
public class AndroidServer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GameRepository gameRepository;

    @GetMapping("/")
    String home() {
        return "Server is running!";
    }


    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public User loadUser(@RequestBody User user) throws EntryDoesNotExistException {
        if (user.getUsername() == null) {
            throw new EntryDoesNotExistException("No username specified");
        }

        user =  userRepository.findByUsername(user.getUsername());

        if (user == null) {
            throw new EntryDoesNotExistException("User does not exist");
        }

        return user;
    }

    @RequestMapping(value = "/user/login", method = RequestMethod.GET)
    public User checkLogin() {
        return getCurrentUser();
    }

    @RequestMapping(value = "/game", method = RequestMethod.GET)
    public Game loadGame(@RequestBody Game game) throws EntryDoesNotExistException {
        if (game.get_id() == null) {
            throw new EntryDoesNotExistException("No game specified");
        }

        game =  gameRepository.findBy_id(game.get_id());

        if (game == null) {
            throw new EntryDoesNotExistException("Game does not exist");
        }

        return game;
    }

    /**
     * creates user object with start score 1200 and saves the user in the database.
     * password encryption
     * @param user username != null and unique, password != null, email unique
     * @param response
     * @return
     * @throws FalseInputException
     */
    @RequestMapping(value = "/user/add", method = RequestMethod.POST)
    public User createUser(@RequestBody User user, HttpServletResponse response) throws FalseInputException {

        if(user.getPassword() == null){
            throw new FalseInputException("user must have a password");
        }

        if(user.getUsername() == null){
            throw new FalseInputException("user must have a username");
        }

        if(MongoDB.loadUser(user.getUsername()) != null) {
            throw new FalseInputException("username is already taken");
        }

        if(userRepository.findByEmail(user.getEmail()) != null){
            throw new FalseInputException("email is already taken");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));

        user.setScore(1200);

        userRepository.save(user);

        return user;
    }

    @RequestMapping(value = "/game", method = RequestMethod.POST)
    public Game createGame(@RequestBody Game game) throws FalseInputException, EntryDoesNotExistException {
        if(gameRepository.findBy_id(game.get_id()) != null){
            throw new FalseInputException("Game already exists!");
        }
        for(String username: game.getTeam1()){
            User user = loadUser(new User(username));
        }
        for(String username: game.getTeam2()){
            User user = loadUser(new User(username));
        }
        for(String username: game.getTeam1()){
            if(game.getTeam2().contains(username)){
                throw new FalseInputException("One User can only be in one team");
            }
        }

        gameRepository.save(game);
        return game;
    }

    @RequestMapping(value = "/game", method = RequestMethod.PUT)
    public Game updateGameState(@RequestBody Game game) throws EntryDoesNotExistException {
        Game dbGame = loadGame(game);
        dbGame.setState(game.getState());
        gameRepository.save(dbGame);
        return dbGame;
    }

    /**
     * berechnet neue elo Werte nach einem Spiel, setzt GameState auf Finished, und fügt das Spiel in die
     * History der beteiligten Spieler ein.
     * @param game Game Objekt, das den Ausgang des Spiels enthält, also result != 0. Es wird _id und result! erwartet.
     * @return
     * @throws GameStateException
     * @throws FalseInputException
     */
    @RequestMapping(value = "/game/setResult", method = RequestMethod.PUT)
    public Game setResult(@RequestBody Game game) throws GameStateException, FalseInputException, EntryDoesNotExistException{
        Game dbGame = loadGame(game);

        if(GameState.FINISHED.equals(dbGame.getState())) {
            throw new GameStateException("Game is already finished");
        }
        dbGame.setState(GameState.FINISHED);

        if(game.getResult() == 0){
            throw new FalseInputException("Es gibt kein Untentschieden. Result darf nicht 0 sein");
        }

        dbGame.setResult(game.getResult());

        dbGame.calculateScore();

        MongoDB.saveGame(dbGame);

        for(String username: dbGame.getParticipatedUsernames()){
            User user = loadUser(new User(username));
            user.addHistory(dbGame.get_id());
            MongoDB.saveUser(user);
        }



        return dbGame;
    }

    @GetMapping(value = "/game/join")
    public Game joinGame(@RequestParam String gameID) throws FalseInputException, EntryDoesNotExistException {

        User currentUser = getCurrentUser();

        if (currentUser == null) {
            throw new EntryDoesNotExistException("Fatal error! currentUser does not exist");
        }
        Game dbGame = gameRepository.findBy_id(gameID);

        if (dbGame == null) {
            throw new FalseInputException("GameID does not exist.");
        }

        if(dbGame.getTeam1().contains(currentUser.getUsername()) || dbGame.getTeam2().contains(currentUser.getUsername())){
            throw new FalseInputException("User is already in this game");
        }
        dbGame.addTeam1(currentUser.getUsername());
        MongoDB.saveGame(dbGame);

        return dbGame;

        // TODO: Link to frontend Lobby
    }



    @RequestMapping(value = "/game/changeTeam", method = RequestMethod.PUT)
    public Game changeTeam(@RequestBody Game game) throws EntryDoesNotExistException {

        game = loadGame(game);

        String currentUser = getCurrentUser().getUsername();

        if(!game.getTeam1().contains(currentUser) && !game.getTeam2().contains(currentUser)){
            throw new EntryDoesNotExistException("this player does not take part in this game");
        }

        if(game.getTeam1().contains(currentUser)){
            game.addTeam2(currentUser);
        }else{
            game.addTeam1(currentUser);
        }

        MongoDB.saveGame(game);

        return game;
    }

    @RequestMapping(value = "/user/history", method = RequestMethod.PUT)
    public List<Game> getHistory(User user) throws EntryDoesNotExistException{

        List<Game> history = new ArrayList<Game>();

        user = loadUser(user);

        for(String gameID: user.getHistory()){
            Game game = gameRepository.findBy_id(gameID);
            history.add(game);
        }

        return history;

    }


    @RequestMapping(value = "/scoreboard", method = RequestMethod.GET)
    public List<User> Scoreboard() {
        List<User> users = new ArrayList<User>();
        users.addAll(userRepository.findAll());
        Collections.sort(users);
        int toIndex = 20 < users.size() ? 20 : users.size();
        return users.subList(0, toIndex);
    }




    private User getCurrentUser(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

       // System.out.println("Username: " + ((org.springframework.security.core.userdetails.User) principal).getUsername());
        return (User) userRepository.findByUsername(((org.springframework.security.core.userdetails.User) principal).getUsername());
    }



    public static void main(String[] args) {
        SpringApplication.run(AndroidServer.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        MongoDB.init(userRepository, gameRepository);
    }
}