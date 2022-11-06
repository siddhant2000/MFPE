package com.managementSystem.service;

import com.managementSystem.createRequest.CreateEvent;
import com.managementSystem.entity.Event;
import com.managementSystem.exception.ResourceNotFoundException;
import com.managementSystem.repository.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    EventRepo eventRepo;





    public List<Event> getAllEvents() {
        return eventRepo.findAll();
    }

    public Event getEventByName(String eventName) {
        if(eventRepo.findByEventName(eventName).getEventId()==null){
            throw new ResourceNotFoundException("Event not present");
        }
        return eventRepo.findByEventName(eventName);

    }


    public String deleteById(Long eventId) {
        if(eventRepo.findById(eventId).isPresent()) {
            Event event =eventRepo.findById(eventId).get();
            eventRepo.deleteById(eventId);
            return event.getEventName()+" deleted successfully";
        }
        else{
            return "no event with the event Id: " + eventId;
        }
    }

    public Event addEvent(CreateEvent createEvent) {

        return eventRepo.save(new Event(createEvent));
    }
}
