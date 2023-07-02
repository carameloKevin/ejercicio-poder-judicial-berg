package com.example.application.endpoints;

import java.util.List;

import com.example.application.DependenciaRepository;
import com.example.application.Dependencia;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class DependenciaEndpoint {

    private DependenciaRepository repository;

    DependenciaEndpoint(DependenciaRepository repository){
        this.repository = repository;
    }

    public List<Dependencia> findAll(){
        return repository.findAll();
    }

    public Dependencia add(String nombre){
        return repository.save(new Dependencia(nombre));
    }

    public Dependencia update(Dependencia edificio){
        return repository.save(edificio);
    }
}
    
