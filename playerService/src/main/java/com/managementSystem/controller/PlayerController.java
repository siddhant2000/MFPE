package com.managementSystem.controller;

import com.managementSystem.request.CreatePlayer;
import com.managementSystem.entity.PlayerEntity;
import com.managementSystem.exception.ResourseNotFoundException;
import com.managementSystem.Response.PlayerResponse;
import com.managementSystem.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/player")
public class PlayerController {

    @Autowired
    PlayerService service;



    @RequestMapping(value = "/addPlayer",method = RequestMethod.POST)
    public String addPlayer(@RequestBody CreatePlayer createPlayer){
        PlayerEntity playerEntity = service.save(createPlayer);
        PlayerResponse response = new PlayerResponse(playerEntity);
        return    "Player "+ response.getPlayerName() + " added successfully.";
    }

    @DeleteMapping("/deletePlayer/{id}")
    public String removePlayer(@PathVariable("id") long playerId){
        return service.removePlayer(playerId);
    }

    @GetMapping("/players")
    public ResponseEntity<List<PlayerEntity>> getAllPlayers(){
        List<PlayerEntity> list = service.getAllPlayers();
        if(list.size()<=0){
            throw new ResourseNotFoundException("Empty");
        }
        return ResponseEntity.ok(list);
    }


    @GetMapping("/{id}")
    public PlayerResponse getPlayerById(@PathVariable("id") Long playerId){
        PlayerEntity playerEntity =service.getPlayerById(playerId);
        if (playerEntity==null){
            throw new ResourseNotFoundException("Player with given Id :- "+playerId+" does not exist");
        }
        return new PlayerResponse(playerEntity);
    }





}
