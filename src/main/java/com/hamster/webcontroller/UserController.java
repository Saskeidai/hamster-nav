package com.hamster.webcontroller;

import com.hamster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
