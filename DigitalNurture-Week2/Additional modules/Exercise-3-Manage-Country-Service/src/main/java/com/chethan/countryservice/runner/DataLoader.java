package com.chethan.countryservice.runner;

import com.chethan.countryservice.entity.Country;
import com.chethan.countryservice.service.CountryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    private final CountryService service;

    public DataLoader(CountryService service) {
        this.service = service;
    }

    @Override
    public void run(String... args) {
        service.addCountry(new Country("IN", "India"));
        service.addCountry(new Country("US", "United States"));
        service.getAllCountries().forEach(System.out::println);
    }
}