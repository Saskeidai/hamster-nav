package com.hamster.pojo;

import java.util.Date;

public class User {

    private Integer id;         //用户uid
    private String userName;    //用户名称
    private String passWord;    //用户密码
    private String nick;        //昵称
    private String email;       //邮箱
    private Date date;          //注册时间
    private String gender;      //性别
    private String imgUrl;      //头像地址

    //构造函数
    public User(String userName, String passWord, String email, String gender) {
        this.userName = userName;
        this.passWord = passWord;
        this.email = email;
        this.date = new Date();
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", passWord='" + passWord + '\'' +
                ", nick='" + nick + '\'' +
                ", email='" + email + '\'' +
                ", date=" + date +
                ", gender='" + gender + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                '}';
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        email = email;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }


}
