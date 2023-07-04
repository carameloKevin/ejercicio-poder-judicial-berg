package com.example.application.endpoints;

import java.util.List;

import com.example.application.DependenciaRepository;
import com.example.application.Edificio;
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

    public Dependencia findById(Long id){
        return repository.findById(id).get();
    }

    public Dependencia add(String nombre, Edificio edificio){
        return repository.save(new Dependencia(nombre, edificio));
    }

    public Dependencia update(Dependencia edificio){
        return repository.save(edificio);
    }

    public Dependencia assignEdifico(Long id, Edificio edificio){
        Dependencia dependencia = repository.findById(id).get();
        dependencia.setEdificio(edificio);
        return dependencia;
    }
    
    public void removeDependencias(Dependencia dependencia){
        repository.delete(dependencia);
    }
}
    
