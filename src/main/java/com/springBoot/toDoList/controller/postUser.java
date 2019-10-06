package com.springBoot.toDoList.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/userId")
//make it /api/createUser eventually;
public class postUser {

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Map returnSomething(){

        Integer userId = 1;
        String username = "Derock";
        Map map = new HashMap();
        map.put("userId", userId);
        map.put("username", username);
        System.out.println(map);
        return map;
    }
}