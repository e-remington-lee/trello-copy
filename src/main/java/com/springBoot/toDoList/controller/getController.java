package com.springBoot.toDoList.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/get")
public class getController {

    @RequestMapping(method = RequestMethod.GET)
    public String getMethod(){
        String obj = "{user: 1}";
        return obj;
    }
}
