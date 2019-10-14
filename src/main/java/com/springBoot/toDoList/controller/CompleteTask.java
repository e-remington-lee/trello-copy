package com.springBoot.toDoList.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class CompleteTask {
    @PostMapping("/api/completeTask")
    public void abc(@RequestBody Map<String, Integer> map){
        try {
            System.out.println(map);
        } catch(Error err) {
            throw new Error(err.getMessage());
        }
    }
}
