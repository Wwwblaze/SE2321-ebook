package com.example.eback.dao;
import com.example.eback.entity.User;

import java.util.List;
import java.util.Map;

public interface userDao {
    User checkUser(String username, String password);

    List<User> getalluser();

    boolean banuser(User user);

    boolean unbanuser(User user);

    boolean adduser(Map<String, String> input);
}
