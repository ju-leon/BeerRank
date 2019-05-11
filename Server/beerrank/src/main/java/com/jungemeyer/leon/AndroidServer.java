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



    /**
     * Loads a user.
     *
     * If id is specified, loads by id, if no id is specified, loads by username
     *
     * @param user
     * @return
     */
    @RequestMapping(value = "/getUser", method = RequestMethod.GET)
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


    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public User createUser(@RequestBody User user, HttpServletResponse response) throws FalseInputException {

        if(MongoDB.loadUser(user.getUsername()) != null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return null;

        }
        userRepository.save(user);

        return user;

    }

    @RequestMapping(value = "/addGame", method = RequestMethod.POST)
    public Game createGame(@RequestBody Game game) throws EntryDoesNotExistException {

        if (game.getTeam1() == null || game.getTeam2() == null) {
            throw new EntryDoesNotExistException("Teams cannot be empty");
        }

        gameRepository.save(game);
        return game;
    }

    @RequestMapping(value = "/updateGameState", method = RequestMethod.PUT)
    public Game updateGameState(@RequestBody Game game) {
        Game dbGame = gameRepository.findBy_id(game.get_id());

        dbGame.setState(game.getState());

        gameRepository.save(dbGame);

        return dbGame;
    }

    @RequestMapping(value = "/setResult", method = RequestMethod.PUT)
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

        MongoDB.saveGameR(dbGame);

        return dbGame;
    }




    public static void main(String[] args) {
        SpringApplication.run(AndroidServer.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        MongoDB.init(userRepository, gameRepository);
    }
}