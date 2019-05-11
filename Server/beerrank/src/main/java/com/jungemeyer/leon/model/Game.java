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
        //konstante für die Eloberechnung
        int k = 25 + 3*Math.abs(result);
        //teamelo von team1 und team2
        double elo1 = averageElo(team1);
        double elo2 = averageElo(team2);
        //erwartungswert dass team1 gewinnt
        double e = 1 / (1 + Math.pow(10, (elo2 - elo1)/400.0));
        //winner looser variable
        int s = result > 0? 1 : 0;
        double delta = (s-e);

        for(User user: team1){
            user.setScore(user.getScore() + (int)(delta * k));
        }
        for(User user: team2){
            user.setScore(user.getScore() - (int)(delta * k));
        }
    }

    private double averageElo(List<User> team){
        double sum = 0, n=0;
        for(User user: team) {
            sum += user.getScore();
            n++;
        }
        return sum / n;
    }


}
