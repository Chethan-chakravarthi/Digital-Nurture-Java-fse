package com.chethan.injection;

public class Student {
    private int id;
    private String name;
    private Address address;

    // Constructor Injection
    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Setter Injection
    public void setAddress(Address address) {
        this.address = address;
    }

    public void display() {
        System.out.println("Student ID : " + id);
        System.out.println("Student Name : " + name);
        System.out.println("City : " + address.getCity());
    }
}