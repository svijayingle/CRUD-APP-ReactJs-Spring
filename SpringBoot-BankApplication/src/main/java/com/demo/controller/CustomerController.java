package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.deere.model.Customer;
import com.deere.service.CustomerService;

@ComponentScan("com.deere.service")
@RestController
@RequestMapping("api")
public class CustomerController {

	@Autowired
	CustomerService cs;
	
	@GetMapping(value="/hello")
	public String helloWorld() {
		return "Welcome to API services";
	}
	
	@RequestMapping(value = "/getAll",method = RequestMethod.GET)
	public List<Customer> getAll() {
		return cs.getAll();
	}
	@PostMapping(value="/create")
    public Customer createcust(@RequestBody Customer c) {
        return cs.create(c);
    }
    
    @DeleteMapping(value="/delete/{id}")
    public void deleteid(@PathVariable long id) {
    	System.out.println(id);
         cs.deleteById(id);
    }
    @GetMapping("/find/{id}")
	public Optional<Customer> findcustomer(@PathVariable long id) {
	    return cs.findById(id);
	}
    @PostMapping("/update")
    public Customer updateCustomer(@RequestBody Customer c) {
        return cs.update(c);
    }
    
    @GetMapping("/welcome")
	public ModelAndView welcomePage() {
	    ModelAndView modelAndView = new ModelAndView("welcome");
	    System.out.println("Welcome-page");
	    return modelAndView;
	}
    
    
}
