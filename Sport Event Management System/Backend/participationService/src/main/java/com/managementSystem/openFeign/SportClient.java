package com.managementSystem.openFeign;


import com.managementSystem.response.SportResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(url = "localhost:8087", value = "sport-client",
    path = "/sport")
public interface SportClient {

    @GetMapping("/getSportsByName/{name}")
    public SportResponse getSportsByName(@PathVariable("name") String sportsName);
}
