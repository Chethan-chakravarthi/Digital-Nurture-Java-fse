package com.example.fsd.patterns.observer;

import java.util.ArrayList;
import java.util.List;

/**
 * A simple observer pattern for a weather station.
 */
// Subject
interface Subject {
    void registerObserver(Observer observer);
    void unregisterObserver(Observer observer);
    void notifyObservers();
}

// Observer
interface Observer {
    void update(float temperature, float humidity);
}

// Concrete subject
class WeatherStation implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private float temperature;
    private float humidity;

    public void setMeasurements(float temperature, float humidity) {
        this.temperature = temperature;
        this.humidity = humidity;
        notifyObservers();
    }

    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void unregisterObserver(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(temperature, humidity);
        }
    }
}

// Concrete observer
class PhoneDisplay implements Observer {
    @Override
    public void update(float temperature, float humidity) {
        System.out.println("Phone Display: Temperature=" + temperature + ", Humidity=" + humidity);
    }
}

public class ObserverPattern {
    public static void main(String[] args) {
        WeatherStation weatherStation = new WeatherStation();
        PhoneDisplay phoneDisplay = new PhoneDisplay();

        weatherStation.registerObserver(phoneDisplay);

        weatherStation.setMeasurements(75, 60);
        weatherStation.setMeasurements(80, 65);
    }
}
