package com.jungemeyer.leon;

import com.jungemeyer.leon.database.GameRepository;
import com.jungemeyer.leon.database.UserRepository;
import com.jungemeyer.leon.model.Game;
import com.jungemeyer.leon.model.User;

public abstract class MongoDB {

    private MongoDB() {}

    private static GameRepository gameRepository;
    private static UserRepository userRepository;

    public static void init(UserRepository userRepo, GameRepository gameRepo){
        gameRepository = gameRepo;
        userRepository = userRepo;
    }

    public static void saveUser(User user){
        userRepository.save(user);
    }

    /**
     * Saves the game and all of it's Attributes recursively
     * @param game
     */
    public static void saveGameR(Game game){
        gameRepository.save(game);
        for(User user: game.getTeam1()){
            saveUser(user);
        }
        for(User user: game.getTeam2()){
            saveUser(user);
        }
    }

    public static void saveGame(Game game){
        gameRepository.save(game);
    }
}
