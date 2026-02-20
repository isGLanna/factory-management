package com.factory_management.services;

import com.factory_management.dto.request.CreateRawMaterialRequest;
import com.factory_management.dto.request.UpdateRawMaterialRequest;
import com.factory_management.dto.response.RawMaterialResponse;
import com.factory_management.entities.RawMaterial;
import com.factory_management.repository.RawMaterialRepository;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class RawMaterialService {
  private final RawMaterialRepository repository;

  public RawMaterialService(RawMaterialRepository repository) {
    this.repository = repository;
  }

  public void create(CreateRawMaterialRequest req) {
    if (repository.existsByName(req.getName())) {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "Raw material already exists.");
    }

    RawMaterial material = new RawMaterial(req.getName(), req.getAmount(), 0);

    repository.save(material);
  }

  public RawMaterial replacement(UpdateRawMaterialRequest req) {
    RawMaterial material = repository.findByName(req.getName())
      .orElseThrow(() -> new RuntimeException("Raw material not found."));
    if (material.getAmount() + req.getAmount() >= 0) {
      material.setAmount(material.getAmount() + req.getAmount());
    } else {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "There is not enough materail;");
    }

    return repository.save(material);
  }

  public List<RawMaterialResponse> getAll() {
    List<RawMaterial> materials = repository.findAll();
    List<RawMaterialResponse> res = new ArrayList<>();

    for(RawMaterial material : materials) {
      res.add(new RawMaterialResponse(material.getName(), material.getAmount(), 0));
    }

    return res;
  }
}
