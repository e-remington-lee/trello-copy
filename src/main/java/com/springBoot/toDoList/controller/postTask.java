package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.staticData;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


@RestController
public class postTask {
    @PostMapping("/api/createTask")
    @ResponseStatus(HttpStatus.CREATED)
    public String postTask(@RequestBody Map<String, Object> obj){
        try {
            staticData data = new staticData();
            String task = obj.get("task").toString();
            Integer userId = (int) obj.get("userId");
            System.out.println(task);
            staticData.createTask(task, userId);
            return task;
        } catch(NullPointerException err) {
            throw new Error("Message Required");
        }
    }
}