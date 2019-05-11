package com.jungemeyer.leon;

public class PostRequestResponse {

    private int id;

    private String message;

    public PostRequestResponse(int id, String message) {
        this.id = id;
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }
}
