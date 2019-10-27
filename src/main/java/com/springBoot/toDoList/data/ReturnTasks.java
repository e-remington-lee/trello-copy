package com.springBoot.toDoList.data;

import com.springBoot.toDoList.dao.daoLayer;
import org.json.JSONArray;

import java.sql.*;
import java.util.HashMap;
import java.util.Map;

public class ReturnTasks {
    public static String returnTasks(Integer userId) {
        try {
            Connection con = DriverManager.getConnection(daoLayer.getURL(), daoLayer.getConnect());
            PreparedStatement st = con.prepareStatement(("SELECT task_id, task_name, completed FROM tasks WHERE user_id = (?)"));
            st.setInt(1,userId);
            ResultSet rs = st.executeQuery();
            JSONArray array = new JSONArray();
            Map<String, Object> map = new HashMap<>();

            while (rs.next()) {
                map.put("task_id", rs.getInt(1));
                map.put("task", rs.getString(2));
                map.put("completed", rs.getBoolean(3));
                array.put(map);
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
