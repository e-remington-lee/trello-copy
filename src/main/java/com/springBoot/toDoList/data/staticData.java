package com.springBoot.toDoList.data;

public class staticData {
//    daoLayer dao = new daoLayer();
//    public Map returnUsers(String userId) {
//        try {
//            Connection con = DriverManager.getConnection(dao.getURL(), dao.getConnect());
//            PreparedStatement st = con.prepareStatement(("SELECT * FROM users WHERE username = (?)"));
//            st.setString(1,userId);
//            ResultSet rs = st.executeQuery();
//            Map<Integer, String> map = new HashMap<>();
//            while (rs.next()) {
//                map.put(rs.getInt(1), rs.getString(2));
//            }
//            con.close();
//            return map;
//        } catch (SQLException err) {
//            throw new Error(err.getMessage());
//        }
//    }
//
//    public void createTask(String task, Integer userId) {
//        try {
//            Connection con = DriverManager.getConnection(dao.getURL(), dao.getConnect());
//            PreparedStatement st = con.prepareStatement(("INSERT into tasks (user_id, task_name) VALUES (?, ?)"));
//            st.setInt(1,userId);
//            st.setString(2,task);
//            int rs = st.executeUpdate();
//            con.close();
//        } catch (SQLException err) {
//            throw new Error(err.getMessage());
//        }
//    }
}
