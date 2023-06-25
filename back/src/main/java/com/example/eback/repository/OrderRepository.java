package com.example.eback.repository;
import com.example.eback.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Orders,Integer> {
    List<Orders> findOrdersByUserid(int id);

}
