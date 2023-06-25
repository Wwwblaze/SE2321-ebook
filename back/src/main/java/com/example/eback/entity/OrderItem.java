package com.example.eback.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "order_item", schema = "bookstore", catalog = "")
public class OrderItem {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "orderid")
    private int orderid;
    @Basic
    @Column(name = "userid")
    private int userid;
    @Basic
    @Column(name = "bookid")
    private int bookid;
    @Basic
    @Column(name = "img")
    private String img;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "time")
    private String time;
    @Basic
    @Column(name = "author")
    private String author;
    @Basic
    @Column(name = "price")
    private int price;

    @ManyToOne
    @JoinColumn(name = "orderid",insertable = false,updatable = false)
    private Orders orders;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrderid() {
        return orderid;
    }

    public void setOrderid(int orderid) {
        this.orderid = orderid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getBookid() {
        return bookid;
    }

    public void setBookid(int bookid) {
        this.bookid = bookid;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderItem orderItem = (OrderItem) o;
        return id == orderItem.id && orderid == orderItem.orderid && userid == orderItem.userid && bookid == orderItem.bookid && price == orderItem.price && Objects.equals(img, orderItem.img) && Objects.equals(name, orderItem.name) && Objects.equals(time, orderItem.time) && Objects.equals(author, orderItem.author);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, orderid, userid, bookid, img, name, time, author, price);
    }
}
