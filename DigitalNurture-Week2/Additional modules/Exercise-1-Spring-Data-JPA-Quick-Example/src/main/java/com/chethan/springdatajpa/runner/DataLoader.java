package com.chethan.springdatajpa.runner;

import com.chethan.springdatajpa.model.Employee;
import com.chethan.springdatajpa.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    private final EmployeeRepository repository;

    public DataLoader(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        repository.save(new Employee(101, "Chethan", "IT"));
        repository.findAll().forEach(System.out::println);
    }
}