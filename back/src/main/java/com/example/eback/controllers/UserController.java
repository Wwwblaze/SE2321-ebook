package com.example.eback.controllers;



import com.example.eback.entity.Shopcart;
import com.example.eback.service.BookService;
import com.example.eback.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import com.example.eback.entity.User;
import com.example.eback.repository.UserRepository;
import com.example.eback.entity.UserAuth;
import java.util.Map;
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin
    @RequestMapping("/login")
    public User login(@RequestBody Map<String, String> input){
        final Logger log = LoggerFactory.getLogger(BookController.class);
        String username = input.get("username");
        String password = input.get("password");
        log.info("login");
        return userService.check(username,password);
    }

    @CrossOrigin
    @PostMapping("/getalluser")
    public List<User> getalluser( ){
        return userService.getalluser();
    }

    @CrossOrigin
    @PostMapping("/banuser")
    public boolean banuser(@RequestBody User user){
        return userService.banuser(user);
    }


    @CrossOrigin
    @PostMapping("/adduser")
    public boolean adduser(@RequestBody Map<String, String> input){
        return userService.adduser(input);
    }

    @CrossOrigin
    @PostMapping("/unbanuser")
    public boolean unbanuser(@RequestBody User user){
        return userService.unbanuser(user);
    }

}
