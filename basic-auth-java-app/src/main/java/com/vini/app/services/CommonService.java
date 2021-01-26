package com.vini.app.services;

import com.vini.app.model.Country;
import com.vini.app.model.State;
import com.vini.app.repositories.CountryRepository;
import com.vini.app.repositories.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommonService {

    @Autowired
    private StateRepository stateRepository;

    @Autowired
    private CountryRepository countryRepository;

    public List<State> getStatesByCountryId (long countryId) {
        return stateRepository.findAllByCountryId(countryId);
    }

    public List<Country> getCountries () {
        return countryRepository.findAll();
    }
}
