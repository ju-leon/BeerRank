package com.jungemeyer.leon.database;

import com.jungemeyer.leon.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {

    User findByFirstName(String firstName);

    List<User> findByLastName(String lastName);

    //List<User> findUserById(String id);

    User findByEmail(String email);

    User findByUsername(String username);
}
