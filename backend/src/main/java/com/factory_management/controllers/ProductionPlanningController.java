package com.factory_management.controllers;

import com.factory_management.dto.request.ProductRequest;
import com.factory_management.dto.response.ProductResponse;
import com.factory_management.dto.response.ProductionPlanningResponse;
import com.factory_management.services.ProductionPlanningService;
import org.springframework.http.ResponseEntity;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class ProductionPlanningController {
  private final ProductionPlanningService service;

  public ProductionPlanningController(ProductionPlanningService service){
    this.service = service;
  }

  @GetMapping("/production-suggestion")
  public ResponseEntity<ProductionPlanningResponse> productionPlanning() {
    return ResponseEntity.ok(service.OptmizeProcess());
  }

  @GetMapping("/max-production")
  public ResponseEntity<ProductResponse> maxProduce(@RequestBody @Valid ProductRequest req) {
    return ResponseEntity.ok(service.CalculateMaxProduction(req.getName()));
  }

}
