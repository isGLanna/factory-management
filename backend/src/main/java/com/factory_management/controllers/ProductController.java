package com.factory_management.controllers;

import com.factory_management.dto.ChangeProduct;
import com.factory_management.dto.CreateProductRequest;
import com.factory_management.entities.Product;
import com.factory_management.services.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/product")
public class ProductController {
  private final ProductService service;

  public ProductController (ProductService service) {
    this.service = service;
  }

  @PostMapping
  public ResponseEntity create(@RequestBody CreateProductRequest req) {
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(service.create(req));
  }

  @PatchMapping("/add")
  public Product sellProduct(@RequestBody @Valid ChangeProduct req) {
    return service.sellProduct(req);
  }

  @PatchMapping("/add")
  public Product produceProduct(@RequestBody @Valid ChangeProduct req) {
    return service.addQuantity(req);
  }
}
