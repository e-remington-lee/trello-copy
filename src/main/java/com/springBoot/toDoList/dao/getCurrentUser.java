package com.springBoot.toDoList.dao;

import org.springframework.stereotype.Repository;

//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
import java.sql.*;
import java.util.Properties;

@Repository
public class getCurrentUser {
    private final static String driver = "org.postgresql.Driver";
    private final static String url = "jdbc:postgresql://localhost/" + System.getenv("db_database_todolist");

    public static void main(String[] args) {
        try {

            Properties props = new Properties();
            props.setProperty("user", System.getenv("db_username"));
//        props.setProperty("user", System.getenv("db_host"));
            props.setProperty("password", System.getenv("db_password"));
            props.setProperty("port", "8080");
            Connection con = DriverManager.getConnection(url, props);
            PreparedStatement st = con.prepareStatement("SELECT * FROM users");
            ResultSet rs = st.executeQuery();
            System.out.println(rs);
            con.close();
        } catch (SQLException err) {
            throw new Error(err.getMessage());
        }
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
