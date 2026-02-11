package com.factory_management.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import com.factory_management.dto.request.CreateRawMaterialRequest;
import com.factory_management.dto.request.UpdateRawMaterialRequest;
import com.factory_management.entities.RawMaterial;
import com.factory_management.services.RawMaterialService;

import java.util.List;

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
    return ResponseEntity
      .status(HttpStatus.CREATED)
      .body(service.create(req));
  }

  @PatchMapping()
  public RawMaterial addQuantity(@RequestBody @Valid UpdateRawMaterialRequest req) {
    return service.updateQuantity(req);
  }

  @GetMapping("/query")
  public List<RawMaterial> query() {
    return service.query();
  }
}
