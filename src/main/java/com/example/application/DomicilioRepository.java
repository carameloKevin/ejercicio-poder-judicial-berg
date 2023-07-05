package com.example.application;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DomicilioRepository extends JpaRepository<Domicilio, Long>{
}