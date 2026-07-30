package com.chethan.springrest.service;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chethan.springrest.dao.EmployeeDao;
import com.chethan.springrest.model.Employee;

@Service
public class EmployeeService {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeService.class);

    @Autowired
    private EmployeeDao employeeDao;

    public ArrayList<Employee> getAllEmployees() {
        LOGGER.info("Returning Employee List");
        return employeeDao.getAllEmployees();
    }
}