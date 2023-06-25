package com.example.eback.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class User {
    @Basic
    @Column(name = "username")
    private String username;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_id")
    private int userId;
    @Basic
    @Column(name = "Email")
    private String email;
    @Basic
    @Column(name = "age")
    private Integer age;
    @Basic
    @Column(name = "icon")
    private String icon;
    @Basic
    @Column(name = "introduction")
    private String introduction;
    @Basic
    @Column(name = "authority")
    private int authority;

    @OneToOne
    @JoinColumn(name="user_id",referencedColumnName="user_id")
    private UserAuth userAuth;

    public UserAuth getUserAuth(){return userAuth; }

    public void setUserAuth(UserAuth userAuth){this.userAuth = userAuth;}

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public int getAuthority() {
        return authority;
    }

    public void setAuthority(int authority) {
        this.authority = authority;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return userId == user.userId && authority == user.authority && Objects.equals(username, user.username) && Objects.equals(email, user.email) && Objects.equals(age, user.age) && Objects.equals(icon, user.icon) && Objects.equals(introduction, user.introduction);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, userId, email, age, icon, introduction, authority);
    }
}
