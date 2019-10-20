package com.springBoot.toDoList.data;

import com.springBoot.toDoList.dao.daoLayer;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DataDeleteTask {
    public static void deleteTask(Integer id) {
        try {
            Connection con = DriverManager.getConnection(daoLayer.getURL(), daoLayer.getConnect());
            PreparedStatement st = con.prepareStatement(" DELETE from tasks where task_id = (?)");
            st.setInt(1,id);
            st.executeUpdate();
            con.close();
        } catch (SQLException err) {
            throw new Error(err.getMessage());
        }
    }
}
