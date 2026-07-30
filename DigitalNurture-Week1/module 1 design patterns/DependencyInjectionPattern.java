package com.example.fsd.patterns.di;

/**
 * A simple dependency injection pattern for a notification service.
 */
// Service
interface MessageService {
    void sendMessage(String message);
}

// Concrete service
class EmailService implements MessageService {
    @Override
    public void sendMessage(String message) {
        System.out.println("Email: " + message);
    }
}

// Client
class Notification {
    private MessageService service;

    // Constructor injection
    public Notification(MessageService service) {
        this.service = service;
    }

    public void send(String message) {
        service.sendMessage(message);
    }
}

public class DependencyInjectionPattern {
    public static void main(String[] args) {
        MessageService service = new EmailService();
        Notification notification = new Notification(service);

        notification.send("Hello, world!");
    }
}
