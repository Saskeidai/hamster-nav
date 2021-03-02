package com.hamster.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//实现HandlerInterceptor

public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //获取session
        Object session = request.getSession().getAttribute("loginUser");
        return true;
        //判断是否获取到session
       /* if(session==null){
            //未获取session
            request.setAttribute("msg","没有权限,请先登录后查看！");
            //转发到登录页
            request.getRequestDispatcher("/login").forward(request,response);
            return false;
        }else{
            //放行
            return true;
        }*/

    }
}
