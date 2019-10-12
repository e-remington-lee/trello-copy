package com.springBoot.toDoList.data;

import com.springBoot.toDoList.dao.daoLayer;

import java.sql.*;
import java.util.HashMap;
import java.util.Map;

public class staticData {

    public static Map returnTasks(Integer userId) {
        try {
            Connection con = DriverManager.getConnection(daoLayer.getURL(), daoLayer.getConnect());
            PreparedStatement st = con.prepareStatement(("SELECT task_name, completed FROM tasks WHERE user_id = (?)"));
            st.setInt(1,userId);
            ResultSet rs = st.executeQuery();
            Map<String, Boolean> map = new HashMap<>();

            while (rs.next()) {
                map.put(rs.getString(1), rs.getBoolean(2));
            }
            con.close();
            if (map.isEmpty()) {
                throw new Error("No tasks found");
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
