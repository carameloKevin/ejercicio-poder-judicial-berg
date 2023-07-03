package com.example.application;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "edificio")

public class Edificio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nombre;
    
    @JoinColumn(name = "domicilio_calle", referencedColumnName="calle")
    @JoinColumn(name = "domicilio_numero", referencedColumnName="numero")
    @JoinColumn(name = "domicilio_ciudad", referencedColumnName="ciudad")

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE) //Fetch Eager porque si no al llamr findAll() no llama a la base de datos y falla. CascadeType.MERGE para propagar los cambios del padre al hijo, en este caso hacer la relacion Edificio Domicilio
    private Domicilio domicilio;

    @JsonIgnore
    @OneToMany(mappedBy = "edificio")    //cascade = CascadeType.ALL
    //@JoinColumn(name = "edificio_id")
    private List<Dependencia> dependencia;


    public Edificio (String nombre, Domicilio domicilio){
        this.nombre = nombre;
        this.domicilio = domicilio;
    }

    public Edificio(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Domicilio getDomicilio() {
         return domicilio;
    }

    public void setDomicilio(Domicilio domicilio) {
        this.domicilio = domicilio;
    }

    public List<Dependencia> getDependencia() {
         return dependencia;
     }

     public void addDependencia(Dependencia dependencia){
         this.dependencia.add(dependencia);
     }
    


}
