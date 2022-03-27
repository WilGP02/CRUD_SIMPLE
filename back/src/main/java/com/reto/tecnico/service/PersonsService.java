package com.reto.tecnico.service;

import com.reto.tecnico.entity.Persons;

import java.util.List;

public interface PersonsService {
    List<Persons> findAllPersons();
    Persons findById(Long id);
    Persons savePersons(Persons request);
    Persons updatePersons(Long id, Persons persons);
}
