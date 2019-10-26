package com.springBoot.toDoList.controller;

import com.springBoot.toDoList.data.DataGetSingleTask;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetSingleTask {
    @GetMapping("/api/getSingleTask")
    public String getSingleTask(@RequestParam(value="userId") Integer userId, @RequestParam(value="taskId") Integer taskId) {
//        Integer userId = (int)map.get("userId");
//        Integer taskId = (int)map.get("taskId");
        return DataGetSingleTask.getSingleTask(userId, taskId);
    }
}
