package com.springBoot.toDoList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class buttonTests {

    @Test
    public static void test1(){
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
