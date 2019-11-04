package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.DataCreateClass;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


@RestController
public class CreateTask {
    @PostMapping("/api/createTask")
    @ResponseStatus(HttpStatus.CREATED)
    public String postTask(@RequestBody Map<String, Object> obj){
        try {
            String task = obj.get("task").toString();
            Integer userId = (int) obj.get("userId");
            String array = DataCreateClass.createTask(task, userId);
            try {
                return array;
            } catch(Error err) {
                throw new Error(err.getMessage());
            }
        } catch(NullPointerException err) {
            throw new Error("Message Required");
        }
    }
}