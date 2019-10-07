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

    public static Map returnUsers(String userId) {
        try {
            Connection con = DriverManager.getConnection(url, connect());
            PreparedStatement st = con.prepareStatement(("SELECT * FROM users WHERE username = (?)"));
            st.setString(1,userId);
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

    public static void createTask(String task, Integer userId) {
        try {
            Connection con = DriverManager.getConnection(url, connect());
            PreparedStatement st = con.prepareStatement(("INSERT into tasks (user_id, task_name) VALUES (?, ?)"));
            st.setInt(1,userId);
            st.setString(2,task);
            int rs = st.executeUpdate();
            con.close();
        } catch (SQLException err) {
            throw new Error(err.getMessage());
        }
    }
}
