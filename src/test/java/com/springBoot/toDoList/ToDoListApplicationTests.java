package com.springBoot.toDoList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
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
	driver.get("https://www.e-remington-lee.com/");
	driver.manage().window().maximize();
	}
}
