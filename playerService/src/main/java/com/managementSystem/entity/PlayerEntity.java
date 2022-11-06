package com.managementSystem.entity;

import com.managementSystem.request.CreatePlayer;

import javax.persistence.*;

@Entity
@Table(name = "PLAYER")
public class PlayerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long playerId;
    @Column(name = "playerName")
    private String playerName;
    @Column(name="age")
    private int age;
    @Column(name = "contactNumber")
    private long contactNumber;
    @Column(name="email")
    private String email;
    @Column(name="gender")
    private String gender;
    @Column(name = "sportsName")
    private String sportsName;

    public PlayerEntity() {

    }

    public PlayerEntity(CreatePlayer createPlayer) {
        this.playerName = createPlayer.getPlayerName();
        this.age = createPlayer.getAge();
        this.gender = createPlayer.getGender();
        this.contactNumber = createPlayer.getContactNumber();
        this.email=createPlayer.getEmail();
        this.sportsName = createPlayer.getSportsName();
    }

    //GETTERS and SETTERS

    public Long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(Long playerId) {
        this.playerId = playerId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
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

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSportsName() {
        return sportsName;
    }

    public void setSportsName(String sportsName) {
        this.sportsName = sportsName;
    }
}
