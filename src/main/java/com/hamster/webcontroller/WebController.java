package com.hamster.webcontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//web页面控制
@Controller
public class WebController {

    //首页
    @RequestMapping({"/","/index"})
    public String index(){
        return "index";
    }

    //登录
    @RequestMapping("/login")
    public String login(){
        return "login";
    }

    //注册
    @RequestMapping("/register")
    public String register(){
        return "register";
    }


}
