package com.factory_management.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import com.factory_management.dto.request.CreateRawMaterialRequest;
import com.factory_management.dto.request.UpdateRawMaterialRequest;
import com.factory_management.entities.RawMaterial;
import com.factory_management.services.RawMaterialService;

@RestController
@RequestMapping("/raw-material")
@CrossOrigin(origins = "*")
public class RawMaterialsController {
  private final RawMaterialService service;

  public RawMaterialsController (RawMaterialService service) {
    this.service = service;
  }

  @PostMapping
  public ResponseEntity<RawMaterial> create(@RequestBody @Valid CreateRawMaterialRequest req) {
    service.create(req);
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }

  @PatchMapping()
  public ResponseEntity replacement(@RequestBody @Valid UpdateRawMaterialRequest req) {
    service.replacement(req);
    return ResponseEntity.noContent().build();
  }

  @GetMapping
  public ResponseEntity getAll() {
    return ResponseEntity.ok(service.getAll());
  }
}
