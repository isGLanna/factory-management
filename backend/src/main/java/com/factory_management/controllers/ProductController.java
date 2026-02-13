package com.factory_management.controllers;

import com.factory_management.dto.request.ChangeProducConfigRequest;
import com.factory_management.dto.request.ChangeProductRequest;
import com.factory_management.dto.request.CreateProductRequest;
import com.factory_management.dto.response.ProductResponse;
import com.factory_management.services.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/product")
public class ProductController {
  private final ProductService service;

  public ProductController (ProductService service) {
    this.service = service;
  }

  @PostMapping
  public ResponseEntity<Void> create(@RequestBody @Valid CreateProductRequest req) {
    service.create(req);

    return ResponseEntity.status(HttpStatus.CREATED).build();
  }

  @PatchMapping("/sell")
  public ResponseEntity<Void> sell(@RequestBody @Valid ChangeProductRequest req) {
    service.sellProduct(req);

    return ResponseEntity.noContent().build();
  }

  @PatchMapping("/add")
  public ResponseEntity<Void> produce(@RequestBody @Valid ChangeProductRequest req) {
    service.produceProduct(req);

    return ResponseEntity.noContent().build();
  }

  @PatchMapping("/relationship")
  public ResponseEntity<Void> updateRequirement(@RequestBody @Valid ChangeProducConfigRequest req) {
    service.updateConfig(req);

    return ResponseEntity.noContent().build();
  }

  @GetMapping
  public ResponseEntity<List<ProductResponse>> getAll() {
    List<ProductResponse> products = service.getAll();

    return ResponseEntity.ok(products);
  }
}
