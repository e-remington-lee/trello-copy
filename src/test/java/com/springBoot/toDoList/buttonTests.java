package com.springBoot.toDoList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class buttonTests {

    public static void testAddTask(WebDriver driver){
        WebElement taskButton = driver.findElement(By.id("addTask"));
        taskButton.click();
        WebElement testButton = driver.findElement(By.id("testButton"));
        String test = testButton.getText();
        if (test.equalsIgnoreCase("hello!!")) {
            System.out.println("Task successfully generated");
        } else {
            throw new Error("Task not generated");
        }
    }

    public static void testGetUser(WebDriver driver) {
        WebElement enterTaskButton = driver.findElement(By.id("addTask"));
        String task = enterTaskButton.getText();
        System.out.println(task);
        WebElement testGet = driver.findElement(By.id("getUser"));
        String userButton = testGet.getText();
        System.out.println(userButton);
        if (task.equalsIgnoreCase("Add Task")) {
            System.out.println("Task test passes");
        } else {
            throw new Error("Task button does not match");
        }

        if (userButton.equalsIgnoreCase("Test Get")) {
            System.out.println("Get button basses");
        } else{
            System.out.println("error 2");
        }
    }
}
