package com.jungemeyer.leon.database;

import com.jungemeyer.leon.model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository<Game, Integer> {

    Game findBy_id(String _id);
}
