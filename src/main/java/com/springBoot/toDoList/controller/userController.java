package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.staticData;
import com.springBoot.toDoList.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/userId")
public class userController {

//    String bob = "Terrible";
//
//    @GetMapping("/api/userId")
//    @ResponseBody
//    public String sayHello() {
//        return bob;
//    }
    @Autowired
    private userService userService;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public String returnSomething(){
        System.out.println("Something 2!");
        String returnObject = "{user: 1, name: Derock}";
        return returnObject;
    }
    public Collection<staticData> getAllUsers(){
        return userService.getAllUsers();
    }
}
