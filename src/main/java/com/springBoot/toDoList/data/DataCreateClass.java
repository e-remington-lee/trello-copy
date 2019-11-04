package com.springBoot.toDoList.data;

import com.springBoot.toDoList.dao.daoLayer;
import org.json.JSONArray;

import java.sql.*;
import java.util.HashMap;

public class DataCreateClass {
    public static String createTask(String task, Integer userId) {
        try {
            Connection con = DriverManager.getConnection(daoLayer.getURL(), daoLayer.getConnect());
            PreparedStatement st = con.prepareStatement("INSERT into tasks (user_id, task_name) VALUES (?, ?) RETURNING user_id, task_id, task_name ");
            st.setInt(1,userId);
            st.setString(2,task);
            ResultSet rs = st.executeQuery();
            HashMap<String, Object> map = new HashMap<String, Object>();
            JSONArray array = new JSONArray();
            while (rs.next()) {
                map.put("user_id", rs.getInt(1));
                map.put("task_id", rs.getInt(2));
                map.put("task", rs.getString(3));
                array.put(map);
            }
            con.close();
            try {
                return array.toString();
            } catch (Error err) {
                throw new Error(err.getMessage());
            }

        } catch (SQLException err) {
            throw new Error(err.getMessage());
        }
    }
}