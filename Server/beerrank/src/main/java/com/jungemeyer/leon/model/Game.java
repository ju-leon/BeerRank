package com.jungemeyer.leon.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "games")
public class Game {


    private String team1;
    private String team2;

    private int result;

    private String state;

    @Id
    private String _id;

    public String getTeam1() {
        return team1;
    }

    public String getTeam2() {
        return team2;
    }

    public int getResult() {
        return result;
    }

    public String get_id() {
        return _id;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
