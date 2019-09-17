package com.springBoot.toDoList.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api/userId")
public class userController {

    String bob = "Terrible";

    @GetMapping("/api/userId")
    @ResponseBody
    public String sayHello() {
        return bob;
    }
//    @Autowired
//    private userService userService;

//    @RequestMapping(method = RequestMethod.POST)
//    public void returnSomething(){
//        System.out.println("Something!");

    }
//    public Collection<staticData> getAllUsers(){
//        return userService.getAllUsers();
//    }
//}
