package com.example.eback.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Shopcart {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "cartid")
    private int cartid;
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
    @Column(name = "author")
    private String author;
    @Basic
    @Column(name = "price")
    private int price;

    public int getCartid() {
        return cartid;
    }

    public void setCartid(int cartid) {
        this.cartid = cartid;
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
        Shopcart shopcart = (Shopcart) o;
        return cartid == shopcart.cartid && userid == shopcart.userid && bookid == shopcart.bookid && price == shopcart.price && Objects.equals(img, shopcart.img) && Objects.equals(name, shopcart.name) && Objects.equals(author, shopcart.author);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cartid, userid, bookid, img, name, author, price);
    }
}
