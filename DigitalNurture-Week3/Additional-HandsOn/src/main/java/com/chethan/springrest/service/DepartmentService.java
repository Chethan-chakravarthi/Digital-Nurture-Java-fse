package com.chethan.springrest.service;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chethan.springrest.dao.DepartmentDao;
import com.chethan.springrest.model.Department;

@Service
public class DepartmentService {

    private static final Logger LOGGER = LoggerFactory.getLogger(DepartmentService.class);

    @Autowired
    private DepartmentDao departmentDao;

    public ArrayList<Department> getAllDepartments() {
        LOGGER.info("Returning Department List");
        return departmentDao.getAllDepartments();
    }
}