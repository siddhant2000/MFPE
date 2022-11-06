package com.managementSystem.Response;


import com.managementSystem.entity.Sports;

public class SportResponse {


    private Long sportsId;
    private Integer noOfPlayers;
    private String sportsName;
    private String sportsType;

    public SportResponse(){}

    public SportResponse(Sports sports) {
        this.sportsId = sports.getSportsId();
        this.noOfPlayers = sports.getNoOfPlayers();
        this.sportsName = sports.getSportsName();
        this.sportsType = sports.getSportsType();
    }

    public Long getSportsId() {
        return sportsId;
    }

    public void setSportsId(Long sportsId) {
        this.sportsId = sportsId;
    }

    public Integer getNoOfPlayers() {
        return noOfPlayers;
    }

    public void setNoOfPlayers(Integer noOfPlayers) {
        this.noOfPlayers = noOfPlayers;
    }

    public String getSportsName() {
        return sportsName;
    }

    public void setSportsName(String sportsName) {
        this.sportsName = sportsName;
    }

    public String getSportsType() {
        return sportsType;
    }

    public void setSportsType(String sportsType) {
        this.sportsType = sportsType;
    }
}
