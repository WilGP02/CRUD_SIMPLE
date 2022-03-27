package com.reto.tecnico.repository;

import com.reto.tecnico.entity.Persons;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonsRepository extends JpaRepository<Persons, Long> {
}
