package com.managementSystem.controller;

import com.managementSystem.entity.Participation;
import com.managementSystem.exception.ResourseNotFoundException;
import com.managementSystem.openFeign.EventClient;
import com.managementSystem.openFeign.PlayerClient;
import com.managementSystem.openFeign.SportClient;
import com.managementSystem.request.CreateParticipation;
import com.managementSystem.response.EventResponse;
import com.managementSystem.response.ParticipationResponse;
import com.managementSystem.response.PlayerResponse;
import com.managementSystem.response.SportResponse;
import com.managementSystem.service.ParticipationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping(value = "/participation")
public class ParticipationController {

    @Autowired
    private ParticipationService service;

//  USING openFeign client to call other microservices
    @Autowired
    private PlayerClient playerClient;
    @Autowired
    private SportClient sportClient;
    @Autowired
    private EventClient eventClient;

    @PostMapping("/addparticipation")
    public ParticipationResponse addParticipation(@RequestBody CreateParticipation createParticipation){
        Long  playerId =createParticipation.getPlayer_id();
        String  eventName = createParticipation.getEvent_name();
        String  sportName = createParticipation.getSports_name();

//      Getting player model by calling player microservice
        PlayerResponse playerResponse = playerClient.getPlayerById(playerId);
        String playerName = playerResponse.getPlayerName();

//      Getting sport model by calling Sport-Event Microservice
        SportResponse sportResponse = sportClient.getSportsByName(sportName);
        Long sportId = sportResponse.getSportsId();

//      Getting Event model by calling sport-Event Microservice microservice
        EventResponse eventResponse = eventClient.getEventByName(eventName);
        Long eventId = eventResponse.getEventId();


        createParticipation.setPlayer_name(playerName);
        createParticipation.setSports_id(sportId);
        createParticipation.setEvent_id(eventId);

        Participation participation =service.addParticipation(createParticipation);
        return new ParticipationResponse(participation);
    }


    @GetMapping("/getParticipations")
    public ResponseEntity<List<Participation>> getAllParticipation(){
        List<Participation> list =service.getAllParticipation();
        if(list.size()>0){
            return ResponseEntity.ok(list);
        }
        throw new ResourseNotFoundException("Empty");
    }

    @PutMapping("/updateStatus")
    public ResponseEntity<Participation> updateStatus(@RequestBody ParticipationResponse participationResponse){
        Long participationId = participationResponse.getParticipation_id();
       return service.updateStatus(participationId,participationResponse);

    }

    @GetMapping("/getApprovedParticipations/{approved}")
    public ResponseEntity<List<Participation>> getApprovedParticipations(@PathVariable("approved")String approvedStatus){
        return  service.getParticipationStatus(approvedStatus);
    }

    @GetMapping("/getDeclinedParticipations/{declined}")
    public  ResponseEntity<List<Participation>> getDeclinedParticipations(@PathVariable("declined")String declinedStatus){
        return service.getParticipationStatus(declinedStatus);
    }

    @GetMapping("/getPendingParticipations/{pending}")
    public  ResponseEntity<List<Participation>> getPendingParticipations(@PathVariable("pending")String pendingStatus){
        return  service.getParticipationStatus(pendingStatus);
    }


//              Used WebClient To call other microservices
//
//    @PostMapping("/addparticipation")
//    public ParticipationResponse addParticipation(@RequestBody CreateParticipation createParticipation){
//        /////////////////////////
//        Long  playerId =createParticipation.getPlayer_id();
//        String  eventName = createParticipation.getEvent_name();
//        String  sportName = createParticipation.getSports_name();
//
//        PlayerResponse playerResponse = getPlayer(playerId);
//        String playerName = playerResponse.getPlayerName();
//
//        SportResponse sportResponse = getSportService(sportName);
//        Long sportId = sportResponse.getSportsId();
//
//        EventResponse eventResponse = getEventService(eventName);
//        Long eventId = eventResponse.getEventId();
//
//
//
//        createParticipation.setPlayer_name(playerName);
//        createParticipation.setSports_id(sportId);
//        createParticipation.setEvent_id(eventId);
//
//        Participation participation =service.addParticipation(createParticipation);
//        return new ParticipationResponse(participation);
//    }
//
//
//    public PlayerResponse getPlayer(Long playerId){
//
//        WebClient webClient = WebClient.builder().baseUrl("http://localhost:8081/player").build();
//        Mono<PlayerResponse> playerResponseMono = webClient.get().uri("/"+playerId).retrieve()
//                .onStatus(HttpStatus::is4xxClientError,clientResponse -> {
//                    Mono<String> errorMsg = clientResponse.bodyToMono(String.class);
//                    return errorMsg.flatMap(msg -> {
//                        throw new ResourseNotFoundException("Player with this Id is not present");
//                    });
//                })
//                .bodyToMono(PlayerResponse.class);
//
//        return playerResponseMono.block();
//    }
//
//    public SportResponse getSportService(String sportName){
//        WebClient webClient = WebClient.builder().baseUrl("http://localhost:8082/sport").build();
//        Mono<SportResponse> sportResponse =
//                webClient.get().uri("/getSportsByName/"+sportName).retrieve()
//                        .onStatus(HttpStatus::is4xxClientError,clientResponse -> {
//                            Mono<String> errorMsg= clientResponse.bodyToMono(String.class);
//                            return errorMsg.flatMap( msg -> {
//                                throw new ResourseNotFoundException("Sport with the given name is not registered");
//                            });
//                        })
//                        .bodyToMono(SportResponse.class);
//        return sportResponse.block();
//    }
//
//
//
//    public EventResponse getEventService(String eventName){
//
//        WebClient webClient = WebClient.builder().baseUrl("http://localhost:8082/event").build();
//        Mono<EventResponse> eventResponse =
//                webClient.get().uri("/eventByName/"+eventName).retrieve().onStatus(HttpStatus::is4xxClientError,clientResponse -> {
//            Mono<String> errorMsg= clientResponse.bodyToMono(String.class);
//            return errorMsg.flatMap( msg -> {
//                throw new ResourseNotFoundException("Event with the given name is not registered");
//            });
//        })
//                .bodyToMono(EventResponse.class);
//
//        return eventResponse.block();
//    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

}
