package com.jungemeyer.leon.model;

import com.jungemeyer.leon.Exceptions.EntryDoesNotExistException;
import com.jungemeyer.leon.MongoDB;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "users")
public class User implements Comparable {

    @Id
    @Column(name = "username", updatable = false, nullable = false)
    private String username;

    private String firstName;
    private String lastName;

    @Indexed(unique = true)
    private String email;
    private String password;
    private int score;

    private List<String> history;

    public User(){
        history = new ArrayList<String>();
    }

    public User(String username){
        this.username = username;
        history = new ArrayList<String>();
    }

    public User(int score)
    {
        history = new ArrayList<String>();
        this.score = score;
    }

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

    public void setScore(int score){
        this.score = score;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<String> getHistory(){
        List<String> h = new ArrayList<>();
        h.addAll(history);
        return h;
    }

    public void addHistory(String gameID){
        if(history.size() >= 20){
            history.remove(19);
        }
        history.add(0, gameID);
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", score=" + score +
                '}';
    }


    @Override
    public int compareTo(Object o) {
        User other = (User) o;
       return other.score - this.score;
    }
}
