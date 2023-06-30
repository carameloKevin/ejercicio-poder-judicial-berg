package com.example.application.endpoints;

import java.util.List;

import com.example.application.Domicilio;
import com.example.application.DomicilioRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class DomicilioEndpoint {
    private DomicilioRepository repository;

    DomicilioEndpoint(DomicilioRepository repository){
        this.repository = repository;
    }

    public List<Domicilio> findAll(){
        return repository.findAll();
    }

    public Domicilio add(String ciudad, String calle, String numero){
        return repository.save(new Domicilio(ciudad, calle, numero));
    }

    public Domicilio update(Domicilio edificio){
        return repository.save(edificio);
    }
}
