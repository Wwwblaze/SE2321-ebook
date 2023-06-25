package com.example.eback.repository;
import java.util.List;
import com.example.eback.entity.Shopcart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShopcartRepository extends JpaRepository<Shopcart, Integer> {
       List<Shopcart> findShopcartsByUserid(int id);

}