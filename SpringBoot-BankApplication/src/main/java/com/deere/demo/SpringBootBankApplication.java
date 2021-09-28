package com.deere.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.demo.controller.CustomerController;

@EnableJpaRepositories("com.deere.repo")
@EntityScan("com.deere.model")
@ComponentScan(basePackageClasses = CustomerController.class)
@SpringBootApplication
public class SpringBootBankApplication extends SpringBootServletInitializer{

	@Override
   protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
      return application.sources(SpringBootBankApplication.class);
   }
	public static void main(String[] args) {
		SpringApplication.run(SpringBootBankApplication.class, args);
	}
}
