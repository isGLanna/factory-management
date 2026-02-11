package com.factory_management.services;

import com.factory_management.dto.ChangeProduct;
import com.factory_management.dto.CreateProductRequest;
import com.factory_management.entities.Product;
import com.factory_management.entities.RawMaterial;

import com.factory_management.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProductService {
  private final ProductRepository repository;

  public ProductService(ProductRepository repository) {
    this.repository = repository;
  }

  public Product create(CreateProductRequest req) {
    if (repository.existsByName(req.getName())) {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "Product already exists.");
    }

    Product product = new Product(req.getName(), req.getQuantity(), req.getPrice());
    return repository.save(product);
  }

  public Product addQuantity(ChangeProduct req) {
    Product product = repository.findByName(req.getName())
            .orElseThrow(() -> new RuntimeException("Product not found."));

    product.setStock(product.getStock() + req.getQuantity());

    return repository.save(product);
  }

  public List<Product> query() {
    return repository.findAll();
  }
}

