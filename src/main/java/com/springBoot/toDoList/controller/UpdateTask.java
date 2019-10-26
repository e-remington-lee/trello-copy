package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.DataUpdateClass;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class UpdateTask {
    @PostMapping("/api/updateTask")
    @ResponseStatus(HttpStatus.CREATED)
    public void updateTask(@RequestBody Map<String, Object> map) {
        try {
            Integer userId = (int)map.get("userId");
            Integer taskId = (int)map.get("taskId");
            String task = map.get("task").toString();
            DataUpdateClass.updateTask(userId, taskId, task);
            System.out.println("done");
        } catch (Error err) {
            throw new Error(err.getMessage());
        }
    }
}
