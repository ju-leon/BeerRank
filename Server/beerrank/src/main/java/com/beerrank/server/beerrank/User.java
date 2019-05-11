package com.beerrank.server.beerrank;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    private String username;

    private String name;
    private String firstname;
}
