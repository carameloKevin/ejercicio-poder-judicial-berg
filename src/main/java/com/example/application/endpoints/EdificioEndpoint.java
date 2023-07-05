package com.example.application.endpoints;

import com.example.application.EdificioRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

import java.util.List;

import com.example.application.Dependencia;
import com.example.application.Domicilio;
import com.example.application.Edificio;

@Endpoint
@AnonymousAllowed   //Cualquier puede llamar 
public class EdificioEndpoint {
    private EdificioRepository repository;

    EdificioEndpoint(EdificioRepository repository){
        this.repository = repository;
    }

    public List<Edificio> findAll(){
        return repository.findAll();
    }

    public Edificio findById(Long id){
        return repository.findById(id).get();
    }

    public Edificio add(String nombre, Domicilio domicilio){
        return repository.save(new Edificio(nombre, domicilio));
    }

    public Edificio update(Edificio edificio){
        return repository.save(edificio);
    }

    public List<Dependencia> getDependenciasEdificio(Long id){
        Edificio edificio = repository.findById(id).get();
        return edificio.getDependencia();
    }

    public Edificio addDependenciaToEdifcio(Long id,Dependencia dependencia)
    {
        Edificio edificio = repository.findById(id).get();
        edificio.addDependencia(dependencia);
        return edificio;
    }

    public void remove(Edificio edificio){
        repository.delete(edificio);
    }
    
}
