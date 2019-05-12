package com.jungemeyer.leon;

import com.jungemeyer.leon.Exceptions.EntryDoesNotExistException;
import com.jungemeyer.leon.Exceptions.FalseInputException;
import com.jungemeyer.leon.Exceptions.FinishedGameException;
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

        User returnUser = null;
        returnUser =  userRepository.findByUsername(user.getUsername());

        if (returnUser == null) {
            throw new EntryDoesNotExistException("User does not exist");
        }

        return returnUser;

    }


    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public User createUser(@RequestBody User user, HttpServletResponse response) throws FalseInputException {

        if(MongoDB.loadUser(user.getUsername()) != null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return null;
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));

        userRepository.save(user);

        return user;
    }

    @RequestMapping(value = "/game", method = RequestMethod.POST)
    public Game createGame(@RequestBody Game game) throws EntryDoesNotExistException {
        if(gameRepository.findBy_id(game.get_id()) != null){

        }

        gameRepository.save(game);
        return game;
    }

    @RequestMapping(value = "/game", method = RequestMethod.PUT)
    public Game updateGameState(@RequestBody Game game) {
        Game dbGame = gameRepository.findBy_id(game.get_id());

        dbGame.setState(game.getState());

        gameRepository.save(dbGame);

        return dbGame;
    }

    /**
     * berechnet neue elo werte nach einem Spiel
     * @param game  Game Objekt, das den Ausgang des Spiels enthält, also result != 0.
     * @return
     * @throws FinishedGameException
     * @throws FalseInputException
     */
    @RequestMapping(value = "/game/setResult", method = RequestMethod.PUT)
    public Game setResult(@RequestBody Game game) throws FinishedGameException, FalseInputException{
        Game dbGame = gameRepository.findBy_id(game.get_id());

        if(GameState.FINISHED.equals(dbGame.getState())) {
            throw new FinishedGameException("Game is already finished");
        }
        dbGame.setState(GameState.FINISHED);

        if(dbGame.getResult() == 0){
            throw new FalseInputException("Es gibt kein Untentschieden. Result darf nicht 0 sein");
        }

        dbGame.calculateScore();

        dbGame.setState(game.getState());

        MongoDB.saveGame(dbGame);

        return dbGame;
    }

    @GetMapping(value = "/game/join")
    public Game get(@RequestParam String gameID) throws FalseInputException {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        System.out.println("Username: " + ((org.springframework.security.core.userdetails.User) principal).getUsername());
        User currentUser = (User) userRepository.findByUsername(((org.springframework.security.core.userdetails.User) principal).getUsername());

        if (currentUser == null) {
            System.out.println("Fatal error!");
            throw new FalseInputException("Error");
        }

        Game dbGame = gameRepository.findBy_id(gameID);

        if (dbGame == null) {
            throw new FalseInputException("GameID does not exist.");
        }

        dbGame.addTeam1(currentUser.getUsername());

        return dbGame;

        // TODO: Link to frontend Lobby
    }



    public static void main(String[] args) {
        SpringApplication.run(AndroidServer.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        MongoDB.init(userRepository, gameRepository);
    }
}