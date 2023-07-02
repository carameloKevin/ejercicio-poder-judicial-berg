package com.example.application;

import java.io.Serializable;

/*
 * Clase auxiliar para hacer una clave compuesta para no repetir domicilios
 */
public class DomicilioId implements Serializable{
    String calle;
    String ciudad;
    String numero;
}
