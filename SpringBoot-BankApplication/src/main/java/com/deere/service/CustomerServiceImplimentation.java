package com.deere.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deere.model.Customer;
import com.deere.repo.CustomerRepo;
import com.deere.repo.CustomerRepo2;


@Service
public class CustomerServiceImplimentation implements CustomerService {

	@Autowired
	CustomerRepo repo;
	@Autowired
	CustomerRepo2 repo2;
	
	@Override
	public List<Customer> getAll() {
		
		List<Customer> list = repo.findAll();
		return list;
	}
	
	@Override
    public Customer create(Customer c) {
    c=repo.save(c);
        return c;
    }

 
	@Override
    public void deleteById(long id) {
         repo.deleteById(id);
    }
	
	@Override
	public Optional<Customer> findById(long id) {
		return repo.findById(id);
	}

	@Override
	public Customer update(Customer c) {
			return repo.saveAndFlush(c);
	}
}
