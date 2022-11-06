package com.managementSystem.repository;

import com.managementSystem.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface EventRepo extends JpaRepository<Event,Long> {

//    @Query("select e from events e where e.eventName=:m")
    Event findByEventName(String eventName);
}
