package com.springBoot.toDoList.dao;

import java.sql.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;


public class daoLayer {
    private final static String url = "jdbc:postgresql://localhost/" + System.getenv("db_database_todolist");

    public static Properties connect() {
        Properties props = new Properties();
        props.setProperty("user", System.getenv("db_username"));
        props.setProperty("password", System.getenv("db_password"));
//        props.setProperty("port", "8080");
        return props;
    }

    public static Map returnUsers() {
        try {
            Connection con = DriverManager.getConnection(url, connect());
            PreparedStatement st = con.prepareStatement("SELECT * FROM users");
            ResultSet rs = st.executeQuery();
            Map<Integer, String> map = new HashMap<>();
            while (rs.next()) {
                map.put(rs.getInt(1), rs.getString(2));
            }
            con.close();
            return map;
        } catch (SQLException err) {
            throw new Error(err.getMessage());
        }
    }
}
