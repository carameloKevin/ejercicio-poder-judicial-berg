package com.example.application;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.application.DomicilioId;

public interface DomicilioRepository extends JpaRepository<Domicilio, DomicilioId>{
    
}