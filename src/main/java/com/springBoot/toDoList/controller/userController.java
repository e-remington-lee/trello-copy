package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.staticData;
import com.springBoot.toDoList.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/users")
public class userController {

    @Autowired
    private userService userService;

    @RequestMapping(method = RequestMethod.GET)
    public Collection<staticData> getAllUsers(){
        return userService.getAllUsers();
    }

}
