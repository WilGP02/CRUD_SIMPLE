package com.reto.tecnico.service.impl;

import com.reto.tecnico.entity.Persons;
import com.reto.tecnico.repository.PersonsRepository;
import com.reto.tecnico.service.PersonsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonsServiceImpl implements PersonsService {

    @Autowired
    private PersonsRepository personsRepository;

    @Override
    public List<Persons> findAllPersons() {
        return personsRepository.findAll();
    }

    @Override
    public Persons findById(Long id) {
        Optional<Persons> personsData = personsRepository.findById(id);
        if (personsData.isPresent()) {
            return personsData.get();
        } else {
            return null;
        }
    }

    @Override
    public Persons savePersons(Persons persons) {
        try {
            Persons _persons = personsRepository
                    .save(new Persons(persons.getName(), persons.getLastName(), persons.getAge()));
            return _persons;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Persons updatePersons(Long id, Persons persons) {
        Optional<Persons> personsData = personsRepository.findById(id);
        if (personsData.isPresent()) {
            Persons _persons = personsData.get();
            _persons.setAge(persons.getAge());
            _persons.setLastName(persons.getLastName());
            _persons.setName(persons.getName());
            return personsRepository.save(_persons);
        } else {
            return null;
        }
    }
}
