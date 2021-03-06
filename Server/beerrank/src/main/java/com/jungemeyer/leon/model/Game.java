package com.jungemeyer.leon.model;

import com.jungemeyer.leon.MongoDB;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection = "games")
public class Game {


    @Id
    private String _id;
    private List<String> team1;
    private List<String> team2;
    //result gibt an um wie viele becher ein Team gewonnen hat. positiv für team1 hat gewonnen.
    private int result;
    private GameState state;

    private final Date creationDate = new Date();


    public Game(){
        team1 = new ArrayList<String>();
        team2 = new ArrayList<String>();
    }

    public Game(String _id){
        this._id = _id;
        team1 = new ArrayList<String>();
        team2 = new ArrayList<String>();
    }

    public Game(List<String> team1, List<String> team2, int result){
        this.team1 = team1;
        this.team2 = team2;
        this.result = result;
    }

    public List<String> getTeam1() {
        List<String> t1 = new ArrayList<String>();
        t1.addAll(team1);
        return t1;
    }

    public List<String> getTeam2() {
        List<String> t2 = new ArrayList<String>();
        t2.addAll(team2);
        return t2;
    }

    public List<String> getParticipatedUsernames(){
        List<String> users = new ArrayList<String>();
        users.addAll(team1);
        users.addAll(team2);
        return users;
    }

    public void addTeam1(String user){
        team2.remove(user);
        if(!team1.contains(user)) {
            team1.add(user);
        }
    }

    public void addTeam2(String user){
        team1.remove(user);
        if (!team2.contains(user)) {
            team2.add(user);
        }
    }



    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
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

    public String getCreationDate(){
        DateFormat df = DateFormat.getDateInstance(DateFormat.MEDIUM);
        return df.format(creationDate);
    }

    public void calculateScore(){
        //konstante für die Eloberechnung
        int k = 15 + 5*Math.abs(result);
        //teamelo von team1 und team2
        double elo1 = averageElo(team1);
        double elo2 = averageElo(team2);
        //erwartungswert dass team1 gewinnt
        double e = 1 / (1 + Math.pow(10, (elo2 - elo1)/1000.0));
        //winner looser variable
        int s = result > 0? 1 : 0;
        double delta = (s-e);

        for(String username: team1){

            User user = MongoDB.loadUser(username);
            user.setScore(MongoDB.loadUser(username).getScore() + (int)(delta * k));
            MongoDB.saveUser(user);
        }
        for(String username: team2){
            User user = MongoDB.loadUser(username);
            user.setScore(MongoDB.loadUser(username).getScore() - (int)(delta * k));
            MongoDB.saveUser(user);        }
    }

    private double averageElo(List<String> team){
        double sum = 0, n=0;
        for(String username: team) {
            sum += MongoDB.loadUser(username).getScore();
            n++;
        }
        return sum / n;
    }


}
