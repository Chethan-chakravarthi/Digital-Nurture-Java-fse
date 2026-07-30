package com.chethan.ioc;

public class Student {
    private int id;
    private String name;

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void display() {
        System.out.println("Student ID : " + id);
        System.out.println("Student Name : " + name);
    }
}