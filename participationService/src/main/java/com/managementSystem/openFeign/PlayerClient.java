package com.managementSystem.openFeign;


import com.managementSystem.response.PlayerResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(url = "localhost:8088", value = "player-fiegn-client",
        path = "/player")
public interface PlayerClient {


    @GetMapping("/{id}")
    public PlayerResponse getPlayerById(@PathVariable("id") Long playerId);

}
