package com.springBoot.toDoList.data;

import com.springBoot.toDoList.dao.daoLayer;
import org.json.JSONArray;

import java.sql.*;
import java.util.HashMap;
import java.util.Map;

public class DataGetSingleTask {
    public static String getSingleTask(Integer userId, Integer taskId){
        try {
            Connection con = DriverManager.getConnection(daoLayer.getURL(), daoLayer.getConnect());
            PreparedStatement st = con.prepareStatement("SELECT task_id, task_name, completed FROM tasks WHERE (user_id, task_id) = (?,?)");
            st.setInt(1, userId);
            st.setInt(2, taskId);
            ResultSet rs = st.executeQuery();
            Map<String, Object> singleTask = new HashMap<>();
            JSONArray array = new JSONArray();
            while (rs.next()) {
                singleTask.put("task_id", rs.getInt(1));
                singleTask.put("task", rs.getString(2));
                singleTask.put("completed", rs.getBoolean(3));
                array.put(singleTask);
            }
            con.close();
            try {
                return array.toString();
            } catch (Error err) {
                throw new Error("SQL error");
            }

        } catch (SQLException err) {
            throw new Error(err.getMessage());
        }
    }
}
