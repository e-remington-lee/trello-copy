package com.springBoot.toDoList.controller;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/get")
public class getController {
    public JSONObject createUser(String user, String id) {
        JSONObject member = new JSONObject();
        member.put("user", user);
        member.put("id", id);
        return member;
    }

    @RequestMapping(method = RequestMethod.GET)
    public String getMethod(){
        JSONArray users = new JSONArray();
        users.put(createUser("bob", "1"));
        users.put(createUser("der", "2"));

        JSONObject x = new JSONObject();
        x.put("users", users);
        System.out.println("fake JSOON" + x);
        return users.toString();
    }

}
