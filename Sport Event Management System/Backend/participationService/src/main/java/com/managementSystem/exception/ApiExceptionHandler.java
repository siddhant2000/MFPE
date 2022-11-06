package com.managementSystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;


@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(value = {ResourseNotFoundException.class})
    public ResponseEntity<Object> apiExceptionHandler(ResourseNotFoundException e){
        ApiException r = new ApiException(e.getMessage(),
                HttpStatus.NOT_FOUND,
                ZonedDateTime.now(ZoneId.of("Z")));
        return new ResponseEntity<>(r,HttpStatus.NOT_FOUND);
    }
}
