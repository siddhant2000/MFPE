package com.managementSystem.openFeign;


import com.managementSystem.response.EventResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(url = "localhost:8087", value = "event-client",
    path = "/event")
public interface EventClient {

    @GetMapping("/eventByName/{eventName}")
    public EventResponse getEventByName(@PathVariable("eventName") String eventName);
}
