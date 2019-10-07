package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.dao.daoLayer;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController

//make it /api/createUser eventually;
public class postTask {

    @PostMapping("/api/userId")
    @ResponseStatus(HttpStatus.CREATED)
    public String returnSomething(@RequestBody Map<String, Object> obj){

        String task = obj.get("task").toString();
        Integer userId = (int) obj.get("userId");
        System.out.println(task);
        daoLayer.createTask(task, userId);

        return task;
    }
}