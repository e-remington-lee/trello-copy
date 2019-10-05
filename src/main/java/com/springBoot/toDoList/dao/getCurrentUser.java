package com.springBoot.toDoList.dao;

import org.springframework.stereotype.Repository;

//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
import java.sql.*;
import java.util.Properties;

@Repository
public class getCurrentUser {

    public static void main(String[] args) {

        String url = "jdbc:postgresql://localhost/" + System.getenv("db_database_todolist");
        Properties props = new Properties();
        props.setProperty("user", System.getenv("db_username"));
//        props.setProperty("user", System.getenv("db_host"));
        props.setProperty("user", System.getenv("db_password"));
        Connection con = DriverManager.getConnection(url, props);
        PreparedStatement st = con.prepareStatement("SELECT * FROM users");
    }
//    @Autowired
//    private static Map<Integer, staticData> currentUsers;
//
//    static {
//        currentUsers = new HashMap<Integer, staticData>() {
//
//            {
//                put(1, new staticData(1, "Remington"));
//                put(2, new staticData(2, "Derek"));
//            }
//        };
//    }
//
//    public Collection<staticData> getAllUsers(){
//        return currentUsers.values();
//    }

}
