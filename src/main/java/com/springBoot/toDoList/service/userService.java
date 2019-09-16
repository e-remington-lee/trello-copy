package com.springBoot.toDoList.service;

import com.springBoot.toDoList.dao.getCurrentUser;
import com.springBoot.toDoList.data.staticData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class userService {

    @Autowired
    private getCurrentUser getCurrentUser;

    public Collection<staticData> getAllUsers(){
        return getCurrentUser.getAllUsers();
    }
}
