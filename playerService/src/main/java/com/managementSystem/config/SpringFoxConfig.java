package com.managementSystem.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.Collections;

@Configuration
public class SpringFoxConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(getInfo())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

    public ApiInfo getInfo(){
        return new ApiInfo("PLAYER SERVICE","This is a microservice of Sport Event Management System","1.0" ,"Terms of service"
                ,new Contact("Kartik Pawade","https://github.com/GamechangGR/SportsEventManagementSystem_Microservices","kartikpawade25@gmail.com")
                ,"License of Microservice","License", Collections.emptyList() );
    }
}
