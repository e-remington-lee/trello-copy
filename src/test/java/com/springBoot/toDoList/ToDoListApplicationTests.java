package com.springBoot.toDoList;

import org.junit.BeforeClass;
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
	private static WebDriver driver;
	private static final String driverLocation = "C:\\Users\\erikl\\Downloads\\chromedriver_win32\\chromedriver.exe";
	private static final String chromeDriver = "webdriver.chrome.driver";
	private static final String url = "http://localhost:8080/";


	@BeforeClass
	public static void openDriver(){
		System.setProperty(chromeDriver, driverLocation);
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
	}
//	public static WebDriver openDriver() {
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\erikl\\Downloads\\chromedriver_win32\\chromedriver.exe");
//		WebDriver driver = new ChromeDriver();
//		return driver;
//	}

	@Test
	public void contextLoads() {
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

	@Test
	public void checkButtonText(){
		WebElement enterTaskButton = driver.findElement(By.id("addTask"));

		String task = enterTaskButton.getText();
		WebElement testGet = driver.findElement(By.id("getUser"));
		String userButton = testGet.getText();
		if (task.equalsIgnoreCase("Add Task") && userButton.equalsIgnoreCase("Test Get")) {
			System.out.println("Button test passes");
		} else {
			throw new Error("button text does not match")
		}
	}

//	@AfterClass
//	public static void closeDriver(){
//		driver.quit();
//	}

}
