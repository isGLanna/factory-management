package com.factory_management.controllers;

import com.factory_management.dto.response.ProductFormatting;
import com.factory_management.services.ProductionPlanningService;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ProductionPlanningController {
  private final ProductionPlanningService service;

  public ProductionPlanningController(ProductionPlanningService service){
    this.service = service;
  }

  @GetMapping("/production-suggestion")
  public ResponseEntity<List<ProductFormatting>> productionPlanning() {
    return ResponseEntity.ok(service.OptmizeProcess());
  }

  @GetMapping("/max-production")
  public ResponseEntity<ProductFormatting> maxProduce(@RequestParam String name) {
    return ResponseEntity.ok(service.CalculateMaxProduction(name));
  }
}
