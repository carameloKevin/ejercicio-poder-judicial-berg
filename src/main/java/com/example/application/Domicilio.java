package com.example.application;

import jakarta.persistence.Id;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "domicilio")
public class Domicilio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String calle;
    private String ciudad;
    private String numero;

    @OneToOne(mappedBy = "domicilio", cascade = CascadeType.ALL, orphanRemoval = false, fetch = FetchType.LAZY)
    private Edificio edificio;

    public Domicilio(String ciudad, String calle, String numero){
        this.ciudad = ciudad;
        this.calle = calle;
        this.numero = numero;
    }

    public Domicilio(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    

}