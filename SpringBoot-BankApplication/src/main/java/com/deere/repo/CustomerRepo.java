package com.deere.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.deere.model.Customer;


public interface CustomerRepo extends JpaRepository<Customer, Long> {

}