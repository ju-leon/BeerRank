package com.jungemeyer.leon;

import com.jungemeyer.leon.database.GameRepository;
import com.jungemeyer.leon.database.UserRepository;
import com.jungemeyer.leon.model.Game;
import com.jungemeyer.leon.model.User;

public abstract class MongoDB {

    private MongoDB() {
    }

    private static GameRepository gameRepository;
    private static UserRepository userRepository;

    public static void init(UserRepository userRepo, GameRepository gameRepo) {
        gameRepository = gameRepo;
        userRepository = userRepo;
    }

    public static void saveUser(User user) {
        userRepository.save(user);
    }

    public static User loadUser(String username) {
        return userRepository.findByUsername(username);
    }

    public static Game loadGame(String gameID) {return gameRepository.findBy_id(gameID);}

    public static void saveGame(Game game) {
        gameRepository.save(game);
    }
}
