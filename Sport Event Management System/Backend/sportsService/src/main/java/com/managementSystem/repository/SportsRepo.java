package com.managementSystem.repository;

import com.managementSystem.entity.Sports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface SportsRepo extends JpaRepository<Sports,Long> {

    @Query("select s from Sports s where s.sportsName=:n")
    public Sports getSportByName(@Param(value = "n") String sportsName);
}

