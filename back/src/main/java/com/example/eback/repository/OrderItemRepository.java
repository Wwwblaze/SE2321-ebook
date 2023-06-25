package com.example.eback.repository;
import com.example.eback.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem,Integer> {

    List<OrderItem> findOrderItemsByUserid(int id);

}
