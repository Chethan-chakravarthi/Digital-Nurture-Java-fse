package com.chethan.springrest.dao;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import com.chethan.springrest.model.Department;

@Repository
public class DepartmentDao {
    private static ArrayList<Department> departmentList;

    @SuppressWarnings("unchecked")
    public DepartmentDao() {
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        departmentList = (ArrayList<Department>) context.getBean("departmentList");
    }

    public ArrayList<Department> getAllDepartments() {
        return departmentList;
    }
}