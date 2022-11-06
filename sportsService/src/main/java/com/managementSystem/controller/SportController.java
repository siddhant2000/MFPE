package com.managementSystem.controller;

import com.managementSystem.Response.SportResponse;
import com.managementSystem.request.CreateSport;
import com.managementSystem.entity.Sports;
import com.managementSystem.exception.ResourceNotFoundException;
import com.managementSystem.service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/sport")
public class SportController {

    @Autowired
    private SportService service;
    @GetMapping("/sports")
    public ResponseEntity<List<Sports>> getAllSportsDetail(){
        List<Sports> list =service.getAll();
        if(list.size()<=0){
            throw new ResourceNotFoundException("Empty");
        }
        return ResponseEntity.ok(list);
    }


    @PostMapping("/addSport")
    public String addSport(@RequestBody CreateSport createSport){
        Sports sports =service.saveSport(createSport);
        return "Sport "+sports.getSportsName() +" add successfully";
    }

    @GetMapping("/getSportsByName/{name}")
    public SportResponse getSportsByName(@PathVariable("name") String sportsName){
        Sports sport = service.getSportsByName(sportsName);
        return new SportResponse(sport);
    }
}
