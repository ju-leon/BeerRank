package com.jungemeyer.leon;

import com.jungemeyer.leon.database.*;
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
    @RequestMapping(value = "/loadUser", method = RequestMethod.POST)
    public User loadUser(@RequestBody User user)  {
        User returnUser = null;
        returnUser =  userRepository.findByFirstName(user.getFirstName());
        return returnUser;
    }


    public static void main(String[] args) {
        SpringApplication.run(AndroidServer.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}