package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.dao.daoLayer;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

//package com.springBoot.toDoList.dao.daoLayer;

@RestController
@RequestMapping("/api/get")
public class getUsers {
    public JSONObject createUser(String user, String id) {
        JSONObject member = new JSONObject();
        member.put("user", user);
        member.put("id", id);
        return member;
    }
    @RequestMapping(method = RequestMethod.GET)
    public Map getMethod(){
        daoLayer dao = new daoLayer();

        return dao.returnUsers();
    }
}


