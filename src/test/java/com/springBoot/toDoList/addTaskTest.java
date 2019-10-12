package com.springBoot.toDoList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class addTaskTest {
    public static void addTask(WebDriver driver){
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

}
