package com.example.eback.daoImpl;

import com.example.eback.controllers.BookController;
import com.example.eback.entity.User;
import com.example.eback.repository.UserAuthRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.eback.repository.UserRepository;
import com.example.eback.dao.userDao;
import com.example.eback.entity.UserAuth;


import java.util.List;
import java.util.Map;

@Repository
public class userDaoImpl implements userDao{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserAuthRepository userAuthRepository;


    public User checkUser(String username, String password) {
        User user;
        if(!userRepository.existsByUsername(username)) return null;
        user = userRepository.findByUsername(username);
        int userid = user.getUserId();
        String p = userAuthRepository.findUserAuthByUserId(userid).getPassword();
        if(p.equals(password)) return user;
        return null;
    }

    public List<User> getalluser(){
        List<User> result;
        result = userRepository.findUsersByAuthorityBefore(2);
        return result;
    }

    public boolean banuser(User user){
        user.setAuthority(0);
        userRepository.save(user);
        return true;
    }

    public boolean unbanuser(User user){
        user.setAuthority(1);
        userRepository.save(user);
        return true;
    }


    public boolean adduser(Map<String, String> input){
        String username = input.get("username");
        String password = input.get("password");
        String email = input.get("email");
        if(userRepository.existsByUsername(username)){
            return false;
        }
        else{
            User user = new User();
            user.setUsername(username);
            user.setAuthority(1);
            user.setEmail(email);
            userRepository.save(user);
            int userid = user.getUserId();
            UserAuth userAuth = new UserAuth();
            userAuth.setUserId(userid);
            userAuth.setPassword(password);
            user.setUserAuth(userAuth);
            userAuthRepository.save(userAuth);
            return true;
        }
    }

}
