package com.springBoot.toDoList.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/userId")
public class userController {

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public String returnSomething(){

        String returnObject = "{user: 1, name: Derock}";
        System.out.println(returnObject);
        return returnObject;
    }

}
