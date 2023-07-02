package com.example.application;

import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "dependencia")
public class Dependencia {
    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    // private Long id;

    @Id
    private String nombre;
    private Edificio edificio;

    public Dependencia(String nombre, Edificio edificio){
        this.nombre = nombre;
        this.edificio = edificio;
    }

    public Dependencia(){

    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
    
}
