package com.springBoot.toDoList;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class openDriver  {
    private static WebDriver driver;
    private static final String driverLocation = "C:\\Users\\erikl\\Downloads\\chromedriver_win32\\chromedriver.exe";
    private static final String chromeDriver = "webdriver.chrome.driver";
    private static final String url = "http://localhost:8080/";

    public static WebDriver getDriver() {
        driver = new ChromeDriver();
        return driver;
    }

    public static String getDriverLocation() {
        return driverLocation;
    }

    public static String getChromeDriver() {
        return chromeDriver;
    }

    public static String getUrl() {
        return url;
    }
}

