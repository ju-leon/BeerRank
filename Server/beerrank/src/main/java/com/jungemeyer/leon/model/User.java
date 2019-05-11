package com.jungemeyer.leon.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;

@Document(collection = "users")
public class User {

    @Id
    @Column(name = "username", updatable = false, nullable = false)
    private String username;

    private String firstName;
    private String lastName;

    @Indexed(unique = true)
    private String email;

    private String password;

    private int score;

    public String getUsername() {
        return username;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public int getScore() {
        return score;
    }
}
