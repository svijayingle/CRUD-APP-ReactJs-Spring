package com.deere.service;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.deere.model.Customer;




public interface CustomerService {
	
	 List<Customer> getAll();

	void deleteById(long id);

	Customer create(Customer c);
	

	Optional<Customer> findById(long id);

	Customer update(Customer c);
	
}
