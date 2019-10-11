package com.springBoot.toDoList.data;

import com.springBoot.toDoList.dao.daoLayer;

import java.sql.*;
import java.util.HashMap;
import java.util.Map;

public class staticData {

    public static Map returnUsers(String userId) {
        try {
            Connection con = DriverManager.getConnection(daoLayer.getURL(), daoLayer.getConnect());
            PreparedStatement st = con.prepareStatement(("SELECT * FROM users WHERE username = (?)"));
            st.setString(1,userId);
            ResultSet rs = st.executeQuery();
            Map<Integer, String> map = new HashMap<>();

            while (rs.next()) {
                map.put(rs.getInt(1), rs.getString(2));
            }
            con.close();
            if (map.isEmpty()) {
                throw new Error("No user found");
            } else {
                return map;
            }
        } catch (SQLException err) {
            throw new Error(err.getMessage());
        }
    }

    public static void createTask(String task, Integer userId) {
        try {
            Connection con = DriverManager.getConnection(daoLayer.getURL(), daoLayer.getConnect());
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
