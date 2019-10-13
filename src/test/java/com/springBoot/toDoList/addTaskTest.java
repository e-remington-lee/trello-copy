package com.springBoot.toDoList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class addTaskTest {
    public static void addTask(WebDriver driver){
        WebElement element = driver.findElement(By.id("inputTask"));
        element.sendKeys("New Task Item");
        WebElement element2 = driver.findElement(By.id("addTask"));
        element2.click();
        WebElement testButton = driver.findElement(By.id("testButton"));
        String test = testButton.getText();
        if (test.equalsIgnoreCase("hello!!")) {
            System.out.println("Task successfully generated");
        } else {
            throw new Error("Task not generated");
        }
    }

}
