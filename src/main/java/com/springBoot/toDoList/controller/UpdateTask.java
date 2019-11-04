package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.DataUpdateClass;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class UpdateTask {
    @PostMapping("/api/updateTask")
    @ResponseStatus(HttpStatus.CREATED)
    public String updateTask(@RequestBody Map<String, Object> map) {
        try {
            Integer userId = (int)map.get("userId");
            Integer taskId = (int)map.get("taskId");
            String task = map.get("task").toString();
            String array = DataUpdateClass.updateTask(userId, taskId, task);
            try {
                return array;
            } catch (Error err) {
                throw new Error(err.getMessage());
            }
        } catch (Error err) {
            throw new Error(err.getMessage());
        }
    }
}
