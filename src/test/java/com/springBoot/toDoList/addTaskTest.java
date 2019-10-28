package com.springBoot.toDoList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

class addTaskTest {
    public static void addTask(WebDriver driver){
        try {
            String testFinal = "New Task Item2";
            WebElement element = driver.findElement(By.id("newTask"));

            element.click();
            WebElement element2 = driver.findElement(By.id("0"));
            element2.sendKeys("New Task Item1");

            element.click();
            WebElement element3 = driver.findElement(By.id("1"));
            element3.sendKeys(testFinal);

            String test = element3.getAttribute("value");
            if (test.equalsIgnoreCase(testFinal)) {
                System.out.println("Task successfully generated");
            } else {
                throw new Error("Task not generated");
            }
        } catch (Exception err) {
            throw new Error(err.getMessage());
        }

    }

}
