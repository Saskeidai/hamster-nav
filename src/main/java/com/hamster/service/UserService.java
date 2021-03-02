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

}
