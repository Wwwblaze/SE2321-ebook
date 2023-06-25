package com.example.eback.serviceimpl;

import com.example.eback.dao.userDao;
import com.example.eback.entity.Book;
import com.example.eback.entity.User;
import com.example.eback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private userDao userDao;

    @Override
    public User check(String username, String password){
        return userDao.checkUser(username,password);
    }

    @Override
    public List<User> getalluser() {
        return userDao.getalluser();
    }

    public boolean banuser(User user){
        return userDao.banuser(user);
    }

    public boolean unbanuser(User user){
        return userDao.unbanuser(user);
    }

    public boolean adduser(Map<String, String> input){return userDao.adduser(input);}
}
