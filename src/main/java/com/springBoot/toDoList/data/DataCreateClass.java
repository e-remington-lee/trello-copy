package com.springBoot.toDoList.data;

import com.springBoot.toDoList.dao.daoLayer;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DataCreateClass {
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