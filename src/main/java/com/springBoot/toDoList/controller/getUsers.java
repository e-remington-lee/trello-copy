package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.dao.daoLayer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;



@RestController
public class getUsers {

    @GetMapping("/api/get")
    public Map getMethod(@RequestParam String information){

        return daoLayer.returnUsers(information);
    }

//    @GetMapping("/api/getUser")
//    public Map getUser(){
//        return daoLayer.returnUsers();
//    }
}


