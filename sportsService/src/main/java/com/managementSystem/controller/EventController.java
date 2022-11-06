package com.managementSystem.controller;

import com.managementSystem.Response.EventResponse;
import com.managementSystem.request.CreateEvent;
import com.managementSystem.entity.Event;
import com.managementSystem.exception.ResourceNotFoundException;
import com.managementSystem.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/event")
public class EventController {
    @Autowired
    EventService service;
    @GetMapping("/events")
    public ResponseEntity<List<Event>> getAllEvents(){
        List<Event> list =service.getAllEvents();
        if(list.size()<=0){ throw new ResourceNotFoundException("Empty");}
        return ResponseEntity.ok(list);
    }
    @GetMapping("/eventByName/{eventName}")
    public EventResponse getEventByName(@PathVariable("eventName") String eventName){
        Event event = service.getEventByName(eventName);
        return new EventResponse(event);
    }
    @PostMapping("/addEvent")
    public String addEvent(@RequestBody CreateEvent createEvent){
        Event event =service.addEvent(createEvent);
        return event.getEventName()+" added successfully";
    }
    @DeleteMapping("/deleteEvent/{eventId}")
    public String deleteEvent(@PathVariable("eventId") Long eventId) {
            return service.deleteById(eventId);
    }
}
