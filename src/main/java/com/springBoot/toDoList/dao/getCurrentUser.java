package com.springBoot.toDoList.dao;

import com.springBoot.toDoList.data.staticData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class getCurrentUser {

    @Autowired
    private static Map<Integer, staticData> currentUsers;

    static {
        currentUsers = new HashMap<Integer, staticData>() {

            {
                put(1, new staticData(1, "Remington"));
                put(2, new staticData(2, "Derek"));
            }
        };
    }

    public Collection<staticData> getAllUsers(){
        return currentUsers.values();
    }

}
