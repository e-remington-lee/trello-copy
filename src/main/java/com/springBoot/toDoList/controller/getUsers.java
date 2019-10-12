package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.staticData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;



@RestController
public class getUsers {
    @GetMapping("/api/get")
    public Map getMethod(@RequestParam Integer userId){
        System.out.println(userId);
        return staticData.returnTasks(userId);
    }
}


