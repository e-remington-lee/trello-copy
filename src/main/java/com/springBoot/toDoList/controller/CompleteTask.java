package com.springBoot.toDoList.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class CompleteTask {
    @PostMapping("/api/completeTask")
    @ResponseStatus(HttpStatus.CREATED)
    public void changeTask(@RequestBody Map<String, Object> obj){
        try {

            System.out.println(obj);
        } catch(Error err) {
            throw new Error(err.getMessage());
        }
    }
}
