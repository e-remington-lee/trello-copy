package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.DataDeleteTask;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class DeleteTask {
    @PostMapping("/api/deleteTask")
    public void deleteTask(@RequestBody Map<String, Integer> map) {
        try {
            System.out.println(map);
            Integer id = map.get("taskId");
            DataDeleteTask.deleteTask(id);
        } catch(Error err){
            throw new Error(err.getMessage());
        }
    }
}
