package com.example.eback.repository;

import com.example.eback.entity.UserAuth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAuthRepository extends JpaRepository<UserAuth,Integer> {
       UserAuth findUserAuthByUserId(int id);
}
