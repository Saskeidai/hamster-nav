package com.hamster.webconfiguration;

import com.hamster.interceptor.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {

    //添加视图层
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {

    }

    //添加拦截器

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //注册
        registry.addInterceptor(new LoginInterceptor())
                //拦截路径
                .addPathPatterns("/**")
                //白名单路径
                .excludePathPatterns(
                        "/nav",
                        "/","/index",
                                        "/login","/static/*","/css/*","/js/*","/images/*","/common/*","/Sass/*"
                ,"/common/css/*","/common/fonts/*","/common/images/*","/common/logo/*","/common/js/*","/common/images/logo/*");
    }
}
