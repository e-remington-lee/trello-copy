package com.springBoot.toDoList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ToDoListApplicationTests {

	@Test
	public void contextLoads() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\erikl\\Downloads\\chromedriver_win32\\chromedriver.exe");
	WebDriver driver = new ChromeDriver();
	driver.get("http://localhost:8080/");
	driver.manage().window().maximize();
		WebElement taskButton = driver.findElement(By.id("addTask"));
		taskButton.click();
		WebElement testButton = driver.findElement(By.id("testButton"));
		String test = testButton.getText();
		if (test.equalsIgnoreCase("hello!!")) {
			System.out.println("works");
		} else {
			throw new Error("does not work");
		}
	}

	@Test
	public void test2() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\erikl\\Downloads\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:8080/");
		driver.manage().window().maximize();
		WebElement taskButton = driver.findElement(By.id("addTask"));
		taskButton.click();
		WebElement testButton = driver.findElement(By.id("testButton"));
		String test = testButton.getText();
		if (test.equalsIgnoreCase("hello!!")) {
			System.out.println("works");
		} else {
			throw new Error("does not work");
		}
	}
}
