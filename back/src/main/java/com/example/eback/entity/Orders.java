package com.example.eback.entity;

import com.example.eback.entity.OrderItem;
import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class Orders {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "time")
    private String time;
    @Basic
    @Column(name = "userid")
    private int userid;

    @OneToMany(mappedBy = "orders",cascade = CascadeType.PERSIST)
    private Set<OrderItem> OrderItems;

    public Set<OrderItem> getOrderItems(){return OrderItems;}
    public void setOrderItems(Set<OrderItem> OrderItems){this.OrderItems = OrderItems;}


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Orders orders = (Orders) o;
        return id == orders.id && userid == orders.userid && Objects.equals(time, orders.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, time, userid);
    }



}
