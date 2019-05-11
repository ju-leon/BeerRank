package com.jungemeyer.leon;

import com.jungemeyer.leon.database.GameRepository;
import com.jungemeyer.leon.database.UserRepository;
import com.jungemeyer.leon.model.Game;
import com.jungemeyer.leon.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class AndroidServer implements CommandLineRunner {

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public GameRepository gameRepository;

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
    public User createUser(@RequestBody User user) {

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

    public static void main(String[] args) {
        SpringApplication.run(AndroidServer.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}