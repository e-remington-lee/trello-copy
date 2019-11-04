package com.springBoot.toDoList.data;

import com.springBoot.toDoList.dao.daoLayer;
import org.json.JSONArray;

import java.sql.*;
import java.util.HashMap;

public class DataUpdateClass {
    public static String updateTask(Integer userId, Integer taskId, String task){
        try {
            Connection con = DriverManager.getConnection(daoLayer.getURL(), daoLayer.getConnect());
            PreparedStatement st = con.prepareStatement("UPDATE tasks SET task_name = (?) WHERE user_id = (?) AND task_id = (?) returning user_id, task_id, task_name");
            st.setString(1,task);
            st.setInt(2,userId);
            st.setInt(3,taskId);
            ResultSet rs = st.executeQuery();
            HashMap<String, Object> map = new HashMap<>();
            JSONArray array = new JSONArray();
            con.close();
            while (rs.next()){
                map.put("user_id", rs.getInt(1));
                map.put("task_id", rs.getInt(2));
                map.put("task", rs.getString(3));
                array.put(map);
            }
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
