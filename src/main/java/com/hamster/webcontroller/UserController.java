package com.hamster.webcontroller;

import com.hamster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    @RequestMapping("/getInfo")
    public String getUser(@RequestParam("id") Integer id){
        System.out.printf("id:"+id);
        return userService.sel(id).toString();
    }
    //登录业务
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public String login(@RequestParam("userName")String userName, @RequestParam("passWord")String passWord){
        return userService.login(userName,passWord).toString();
    }
}
