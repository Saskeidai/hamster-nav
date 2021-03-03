package com.hamster.service;

import com.hamster.mapper.UserMapper;
import com.hamster.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserMapper userMapper;

    public User sel(int id){
        return userMapper.sel(id);
    }

    //登录业务
    public User login(String userName,String passWord){
        return userMapper.login(userName,passWord);
    }

}
