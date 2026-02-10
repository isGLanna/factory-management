package com.factory_management.services;

import com.factory_management.dto.CreateRawMaterialRequest;
import com.factory_management.dto.UpdateRawMaterialRequest;
import com.factory_management.entities.RawMaterial;
import com.factory_management.repository.RawMaterialRepository;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class RawMaterialService {
  private final RawMaterialRepository repository;

  public RawMaterialService(RawMaterialRepository repository) {
    this.repository = repository;
  }

  public RawMaterial create(CreateRawMaterialRequest req) {
    if (repository.existsByName(req.getName())) {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "Raw material already exists.");
    }

    RawMaterial material = new RawMaterial(req.getName(), req.getQuantity());
    return repository.save(material);
  }

  public RawMaterial addQuantity(UpdateRawMaterialRequest req) {
    RawMaterial material = repository.findByName(req.getName())
      .orElseThrow(() -> new RuntimeException("Raw material not found."));

    material.setStock(material.getStock() + req.getQuantity());

    return repository.save(material);
  }

  public List<RawMaterial> query() {
    return repository.findAll();
  }
}
