package com.jungemeyer.leon.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "games")
public class Game {


    private List<User> team1;
    private List<User> team2;

    //result gibt an um wie viele becher ein Team gewonnen hat. positiv für team1 hat gewonnen.
    private int result;

    private GameState state;

    @Id
    private String _id;

    public List<User> getTeam1() {
        return team1;
    }

    public List<User> getTeam2() {
        return team2;
    }

    public int getResult() {
        return result;
    }

    public String get_id() {
        return _id;
    }

    public GameState getState() {
        return state;
    }

    public void setState(GameState state) {
        this.state = state;
    }


    public void calculateScore(){
        for(User user: team1){
            user.setScore(user.getScore() + result);
        }
        for(User user: team2){
            user.setScore(user.getScore() - result);
        }
    }


}
