package com.deere.repo;

import org.springframework.data.repository.CrudRepository;

import com.deere.model.Customer;


public interface CustomerRepo2 extends CrudRepository<Customer, Long> {

}