package com.springBoot.toDoList.dao;

import java.util.Properties;


public class daoLayer {
    private static final String url = "jdbc:postgresql://localhost/" + System.getenv("db_database_todolist");

    public static String getURL() {
        return url;
    }

    private static Properties connect() {
        Properties props = new Properties();
        props.setProperty("user", System.getenv("db_username"));
        props.setProperty("password", System.getenv("db_password"));
        return props;
    }

    public static Properties getConnect() {
        return connect();
    }
}
