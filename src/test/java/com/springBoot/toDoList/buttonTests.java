package com.springBoot.toDoList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class buttonTests {

    public static void testGetUser(WebDriver driver) {

        WebElement element = driver.findElement(By.id("getUser"));
        element.click();
        element.findElement(By.name("completeButton"));
        String button = element.getText();

        if (button.equalsIgnoreCase("Complete")) {
            System.out.println("Button is Complete");
        } else {
            throw new Error("Button not complete");
        }


    }
}
