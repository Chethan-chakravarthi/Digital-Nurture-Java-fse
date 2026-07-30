package com.chethan.mavenproject;

public class App {
    public static void main(String[] args) {
        GreetingService service = new GreetingService();
        System.out.println(service.getGreeting());
    }
}