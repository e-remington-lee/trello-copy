package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.ReturnTasks;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class getAllTasks {
    @GetMapping("/api/get")
    public String getTasks(@RequestParam Integer userId){
        return ReturnTasks.returnTasks(userId);
    }
}


