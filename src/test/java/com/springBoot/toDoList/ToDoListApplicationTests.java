package com.springBoot.toDoList;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.concurrent.TimeUnit;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ToDoListApplicationTests extends openDriver {
	private static WebDriver driver;

	@BeforeClass
	public static void openDriver(){
		System.setProperty(getChromeDriver(), getDriverLocation());
		driver = new ChromeDriver();
		driver.get(getUrl());
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	@Test
	public void testAddTAsk() {
		addTaskTest.addTask(driver);
	}


	@AfterClass
	public static void closeDriver(){
		driver.quit();
	}
}

