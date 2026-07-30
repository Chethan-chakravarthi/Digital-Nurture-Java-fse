package com.chethan.countryservice.service;

import com.chethan.countryservice.entity.Country;
import com.chethan.countryservice.repository.CountryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private final CountryRepository repository;

    public CountryService(CountryRepository repository) {
        this.repository = repository;
    }

    public List<Country> getAllCountries() {
        return repository.findAll();
    }

    public void addCountry(Country country) {
        repository.save(country);
    }
}