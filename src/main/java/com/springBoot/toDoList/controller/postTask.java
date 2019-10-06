package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.dao.daoLayer;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController

//make it /api/createUser eventually;
public class postTask {

    @PostMapping("/api/userId")
    @ResponseStatus(HttpStatus.CREATED)
    public String returnSomething(@RequestBody String task){


        daoLayer.createTask(task);
//        Integer userId = 1;
//        String username = "Derock";
//        Map<String, Object> map = new HashMap<>();
//        map.put("userId", userId);
//        map.put("username", username);
//        System.out.println(map);

        return task;
    }
}