package com.managementSystem.repository;

import com.managementSystem.entity.Participation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ParticipationRepo extends JpaRepository<Participation,Long> {

    List<Participation> findByStatus(String status);


}
