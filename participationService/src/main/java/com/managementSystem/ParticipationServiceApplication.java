package com.managementSystem;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
@ComponentScan(basePackages = "com.managementSystem")
@EntityScan(basePackages = "com.managementSystem")
@EnableJpaRepositories(basePackages = "com.managementSystem")
@EnableEurekaClient
@EnableFeignClients(basePackages = "com.managementSystem")
public class ParticipationServiceApplication {

	@Value("{player.Service.url}")
	private String playerServiceUrl;
	@Value("{sport.service.url}")
	private String sportServiceUrl;
	@Value("{event.service.url}")
	private String eventServiceUrl;





	public static void main(String[] args) {
		SpringApplication.run(ParticipationServiceApplication.class, args);
	}
/*
	@Bean
	public WebClient webClient(){
		WebClient webClient = WebClient.builder().baseUrl("http://localhost:8081/player").build();
		return webClient;
	}


	@Bean
	public WebClient webClientSport(){
		WebClient webClient = WebClient.builder().baseUrl("http://localhost:8082/sport").build();
		return webClient;
	}

*/

}
