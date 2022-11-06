package com.managementSystem.Response;

import com.managementSystem.entity.PlayerEntity;

public class PlayerResponse {
    private Long playerId;
    private String playerName;
    private int age;
    private String gender;
    private long contactNumber;
    private String email;
    private String sportsName;

    public PlayerResponse(PlayerEntity playerEntity){
        this.playerId = playerEntity.getPlayerId();
        this.playerName = playerEntity.getPlayerName();
        this.age = playerEntity.getAge();
        this.gender = playerEntity.getGender();
        this.contactNumber = playerEntity.getContactNumber();
        this.email=playerEntity.getEmail();
        this.sportsName = playerEntity.getSportsName();
    }

    public Long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setName(String playerName) {
        this.playerName = playerName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public long getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(long contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSportsName() {
        return sportsName;
    }

    public void setSportsName(String sportsName) {
       this.sportsName = sportsName;
    }


}
