package com.hamster.mapper;

import com.hamster.pojo.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    //通过ID获取user信息
    User sel(int id);
    //登录
    User login(String userName,String passWord);
}
