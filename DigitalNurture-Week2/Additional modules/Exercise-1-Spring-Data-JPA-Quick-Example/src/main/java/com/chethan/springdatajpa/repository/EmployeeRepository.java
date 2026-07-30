package com.chethan.springdatajpa.repository;

import com.chethan.springdatajpa.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}