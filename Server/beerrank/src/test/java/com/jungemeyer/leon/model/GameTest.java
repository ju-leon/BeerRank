package com.jungemeyer.leon.model;

import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static junit.framework.TestCase.assertEquals;

public class GameTest {

    Game game = null;

    @Before
    public void setup(){
        List<User> team1 = new ArrayList<User> ();
        team1.add(new User(1300));
        team1.add(new User(1100));
        List<User> team2 = new ArrayList<User> ();
        team2.add(new User(900));
        team2.add(new User(1100));
        game = new Game(team1, team2, 5);
    }

    @Test
    public void calculateEloTest(){
        game.calculateScore();
        assertEquals(885, game.getTeam2().get(0).getScore());
    }

}
