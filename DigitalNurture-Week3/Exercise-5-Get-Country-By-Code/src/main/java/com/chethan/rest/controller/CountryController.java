package com.chethan.rest.controller;

import com.chethan.rest.model.Country;
import com.chethan.rest.service.CountryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/countries")
public class CountryController {
    private final CountryService service;

    public CountryController(CountryService service) {
        this.service = service;
    }

    @GetMapping("/{code}")
    public Country getCountry(@PathVariable String code) {
        return service.getCountry(code);
    }
}