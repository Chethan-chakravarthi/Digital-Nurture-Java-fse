package com.chethan.countryservice.repository;

import com.chethan.countryservice.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, String> {
}