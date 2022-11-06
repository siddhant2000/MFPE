package com.managementSystem.repository;

import com.managementSystem.entity.PlayerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PlayerRepository extends JpaRepository<PlayerEntity,Long> {


}
