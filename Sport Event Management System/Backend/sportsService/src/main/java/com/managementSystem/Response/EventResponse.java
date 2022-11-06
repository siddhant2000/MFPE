package com.managementSystem.Response;

import com.managementSystem.entity.Event;

import javax.persistence.Column;

public class EventResponse {

    private Long eventId;
    private String eventDate;
    private String eventName;
    private Integer noOfSlots;
    private String sportsName;

    public EventResponse(){}
    public EventResponse(Event event) {
        this.eventId = event.getEventId();
        this.eventDate = event.getEventDate();
        this.eventName = event.getEventName();
        this.noOfSlots = event.getNoOfSlots();
        this.sportsName = event.getSportsName();
    }

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public Integer getNoOfSlots() {
        return noOfSlots;
    }

    public void setNoOfSlots(Integer noOfSlots) {
        this.noOfSlots = noOfSlots;
    }

    public String getSportsName() {
        return sportsName;
    }

    public void setSportsName(String sportsName) {
        this.sportsName = sportsName;
    }
}
