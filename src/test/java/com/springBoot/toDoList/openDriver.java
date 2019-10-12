package com.springBoot.toDoList;

abstract class openDriver  {
    private static final String driverLocation = "C:\\Users\\erikl\\Downloads\\chromedriver_win32\\chromedriver.exe";
    private static final String chromeDriver = "webdriver.chrome.driver";
    private static final String url = "http://localhost:8080/";

    static String getDriverLocation() {
        return driverLocation;
    }

    static String getChromeDriver() {
        return chromeDriver;
    }

    static String getUrl() {
        return url;
    }
}

