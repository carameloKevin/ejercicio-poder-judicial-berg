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

    public Domicilio findById(Long id){
        return repository.findById(id).get();
    }

    public Domicilio add(String ciudad, String calle, String numero){
        return repository.save(new Domicilio(ciudad, calle, numero));
    }

    public Domicilio update(Domicilio domicilio){
        return repository.save(domicilio);
    }

    public void remove(Domicilio domicilio){
        repository.delete(domicilio);
    }
}
