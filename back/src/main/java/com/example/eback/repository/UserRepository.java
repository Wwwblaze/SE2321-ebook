package com.example.eback.repository;

import com.example.eback.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
      User findByUsername(String s);
      boolean existsByUsername(String s);

      List<User> findUsersByAuthorityBefore(int authority);
}