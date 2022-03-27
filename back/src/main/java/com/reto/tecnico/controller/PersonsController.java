package com.reto.tecnico.controller;

import com.reto.tecnico.entity.Persons;
import com.reto.tecnico.service.PersonsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PersonsController {

    @Autowired
    private PersonsService personsService;

    @GetMapping("/persons")
    public ResponseEntity<List<Persons>> getAllPersons(@RequestParam(required = false) String title) {
        try {
            return new ResponseEntity<>(personsService.findAllPersons(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/persons/{id}")
    public ResponseEntity<Persons> getPersonById(@PathVariable("id") long id) {
        Persons personsData = personsService.findById(id);
        if (personsData != null) {
            return new ResponseEntity<>(personsData, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/persons")
    public ResponseEntity<Persons> savePersons(@RequestBody Persons persons) {
        try {
            return new ResponseEntity<>(personsService.savePersons(persons), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/persons/{id}")
    public ResponseEntity<Persons> updateTutorial(@PathVariable("id") long id, @RequestBody Persons persons) {
        Persons personsData = personsService.updatePersons(id, persons);
        if (personsData != null) {
            return new ResponseEntity<>(personsData, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
