package com.managementSystem.entity;


import com.managementSystem.request.CreateParticipation;

import javax.persistence.*;

@Entity
public class Participation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long participation_id;
    private Long player_id;
    private String player_name;
    private Long event_id;
    private String event_name;
    private Long sports_id;
    private String sports_name;
    @Column(name = "Status")
    private String  status;

    public Participation(){

    }

    public Participation(CreateParticipation createParticipation){
        this.player_id = createParticipation.getPlayer_id();
        this.player_name = createParticipation.getPlayer_name();
        this.event_id = createParticipation.getEvent_id();
        this.event_name = createParticipation.getEvent_name();
        this.sports_id = createParticipation.getSports_id();
        this.sports_name = createParticipation.getSports_name();
        this.status = createParticipation.getStatus();
    }

    public Long getParticipation_id() {
        return participation_id;
    }

    public void setParticipation_id(Long participation_id) {
        this.participation_id = participation_id;
    }

    public Long getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(Long player_id) {
        this.player_id = player_id;
    }

    public String getPlayer_name() {
        return player_name;
    }

    public void setPlayer_name(String player_name) {
        this.player_name = player_name;
    }

    public Long getEvent_id() {
        return event_id;
    }

    public void setEvent_id(Long event_id) {
        this.event_id = event_id;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    public Long getSports_id() {
        return sports_id;
    }

    public void setSports_id(Long sports_id) {
        this.sports_id = sports_id;
    }

    public String getSports_name() {
        return sports_name;
    }

    public void setSports_name(String sports_name) {
        this.sports_name = sports_name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
