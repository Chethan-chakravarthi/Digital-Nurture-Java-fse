package com.example.fsd.patterns.singleton;

/**
 * A simple logger implementation using the Singleton pattern.
 */
public class SingletonPattern {

    private static SingletonPattern instance;
    private java.util.List<String> logs = new java.util.ArrayList<>();

    private SingletonPattern() {
        // Private constructor to prevent instantiation
    }

    public static SingletonPattern getInstance() {
        if (instance == null) {
            instance = new SingletonPattern();
        }
        return instance;
    }

    public void log(String message) {
        logs.add(message);
        System.out.println("Log: " + message);
    }

    public void printLogs() {
        System.out.println("--- All Logs ---");
        for (String log : logs) {
            System.out.println(log);
        }
        System.out.println("----------------");
    }

    public static void main(String[] args) {
        SingletonPattern logger1 = SingletonPattern.getInstance();
        SingletonPattern logger2 = SingletonPattern.getInstance();

        logger1.log("This is the first message.");
        logger2.log("This is the second message.");

        System.out.println("Are logger1 and logger2 the same instance? " + (logger1 == logger2));

        SingletonPattern.getInstance().printLogs();
    }
}
