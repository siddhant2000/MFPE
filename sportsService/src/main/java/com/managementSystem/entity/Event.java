package com.managementSystem.entity;



import com.managementSystem.createRequest.CreateEvent;

import javax.persistence.*;

@Entity
@Table(name = "events")
public class Event {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "eventId")
    private Long eventId;
    @Column(name = "eventDate")
    private String eventDate;
    @Column(name = "EventName")
    private String eventName;
    @Column(name = "noOfSlots")
    private Integer noOfSlots;
    @Column(name = "sportsName")
    private String sportsName;

    public Event() {

    }

    public Event(CreateEvent createEvent) {
        this.eventDate = createEvent.getEventDate();
        this.eventName = createEvent.getEventName();
        this.noOfSlots = createEvent.getNoOfSlots();
        this.sportsName = createEvent.getSportsName();
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


    @Override
    public String toString() {
        return "Event{" +
                "eventId=" + eventId +
                ", eventDate=" + eventDate +
                ", eventName='" + eventName + '\'' +
                ", noOfSlots=" + noOfSlots +
                ", sportsName='" + sportsName + '\'' +
                '}';
    }
}









