package com.managementSystem.service;

import com.managementSystem.entity.Participation;
import com.managementSystem.exception.ResourseNotFoundException;
import com.managementSystem.repository.ParticipationRepo;
import com.managementSystem.request.CreateParticipation;
import com.managementSystem.response.EventResponse;
import com.managementSystem.response.ParticipationResponse;
import com.managementSystem.response.PlayerResponse;
import com.managementSystem.response.SportResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

@Service
public class ParticipationService {

    @Autowired
    private ParticipationRepo participationRepo;

//    @Autowired
//    private WebClient webClient;



//    public Participation addParticipation(CreateParticipation createParticipation) {
//        return participationRepo.save(new Participation(createParticipation));
//    }

    public Participation addParticipation(CreateParticipation createParticipation) {

//        Long  playerId =createParticipation.getPlayer_id();
//        String  eventName = createParticipation.getEvent_name();
//        String  sportName = createParticipation.getSports_name();
//
//        PlayerResponse playerResponse = getPlayer(playerId);
//        String playerName = playerResponse.getName();
//
//        SportResponse sportResponse = getSportService(sportName);
//        Long sportId = sportResponse.getSportsId();
//
//        EventResponse eventResponse = getEventService(eventName);
//        Long eventId = eventResponse.getEventId();
//
//
//        if(playerName==null||sportId==null||eventId==null){
//            throw new NullPointerException("Invalid Input!!");
//        }
//        createParticipation.setPlayer_name(playerName);
//        createParticipation.setSports_id(sportId);
//        createParticipation.setEvent_id(eventId);


        return participationRepo.save(new Participation(createParticipation));
    }

//    public PlayerResponse getPlayer(Long playerId){
//
//        WebClient webClient = WebClient.builder().baseUrl("http://localhost:8081/player").build();
//        //////////////////////////////////////////////////////
//        //CODE
//
//
//
//            Mono<PlayerResponse> playerResponse =
//                    webClient.get().uri("/" + playerId).retrieve()
//                            .onStatus(HttpStatus::is4xxClientError,clientResponse -> {
//                                Mono<String> errorMsg = clientResponse.bodyToMono(String.class);
//                                return errorMsg.flatMap(msg -> {
//                                    throw new ResourseNotFoundException("player with given id is not present");
//                                });
//
//
//                    })
//                            .bodyToMono(PlayerResponse.class);
//            return playerResponse.block();
//
//
//
//
//
//
//
//
//        /////////////---------------------------////////////////////////////
//
//
////        Mono<PlayerResponse> playerResponse=
////                webClient.get().uri("/"+playerId).retrieve().bodyToMono(PlayerResponse.class);
////        return playerResponse.block();
//    }
//    public SportResponse getSportService(String sportName){
//        WebClient webClient = WebClient.builder().baseUrl("http://localhost:8082/sport").build();
//        Mono<SportResponse> sportResponse =
//                webClient.get().uri("/getSportsByName/"+sportName).retrieve().bodyToMono(SportResponse.class);
//        return sportResponse.block();
//        }
//
//
//
//    public EventResponse getEventService(String eventName){
//
//        WebClient webClient = WebClient.builder().baseUrl("http://localhost:8082/event").build();
//        Mono<EventResponse> eventResponse =
//                webClient.get().uri("/eventByName/"+eventName).retrieve().bodyToMono(EventResponse.class);
//
//        return eventResponse.block();
//    }













    public List<Participation> getAllParticipation() {
        return participationRepo.findAll();
    }

    public ResponseEntity<Participation> updateStatus(Long participationId, ParticipationResponse participationResponse) {

            if(participationRepo.findById(participationId).isPresent()) {


                Participation participation = participationRepo.findById(participationId).get();

                participation.setStatus(participationResponse.getStatus());
                final Participation updatedParticipation = participationRepo.save(participation);
                return ResponseEntity.ok(updatedParticipation);
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    public ResponseEntity<List<Participation>> getParticipationStatus(String status) {
        List<Participation> list =participationRepo.findByStatus(status);
        if(list.size()>0){
            return ResponseEntity.ok(list);

        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
