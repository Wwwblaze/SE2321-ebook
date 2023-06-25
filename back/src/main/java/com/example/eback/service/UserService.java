package com.example.eback.service;

import com.example.eback.entity.User;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

public interface UserService {
    User check(String username, String password);

    List<User> getalluser();

    boolean banuser(User user);
    boolean unbanuser(User user);

    boolean adduser(Map<String, String> input);
}
