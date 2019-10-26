package com.springBoot.toDoList.data;

import com.springBoot.toDoList.dao.daoLayer;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DataUpdateClass {
    public static void updateTask(Integer userId, Integer taskId, String task){
        try {
            Connection con = DriverManager.getConnection(daoLayer.getURL(), daoLayer.getConnect());
            PreparedStatement st = con.prepareStatement("UPDATE tasks SET task_name = (?) WHERE user_id = (?) AND task_id = (?)");
            st.setString(1,task);
            st.setInt(2,userId);
            st.setInt(3,taskId);
            st.executeUpdate();
            con.close();
        } catch (SQLException err) {
            throw new Error(err.getMessage());
        }
    }
}
