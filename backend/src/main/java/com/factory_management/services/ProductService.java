package com.factory_management.services;

import com.factory_management.dto.ChangeProduct;
import com.factory_management.dto.CreateProductRequest;
import com.factory_management.entities.Product;
import com.factory_management.entities.ProductRequirement;

import com.factory_management.entities.RawMaterial;
import com.factory_management.repository.ProductRepository;
import com.factory_management.repository.ProductRequirementsRepository;
import com.factory_management.repository.RawMaterialRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProductService {
  private final ProductRepository productRepository;
  private final ProductRequirementsRepository requirementRepository;
  private final RawMaterialRepository rawMaterialRepository;

  public ProductService(ProductRepository productRepository, ProductRequirementsRepository requirementRepository, RawMaterialRepository rawMaterialRepository) {
    this.productRepository = productRepository;
    this.requirementRepository = requirementRepository;
    this.rawMaterialRepository = rawMaterialRepository;
  }

  public Product create(CreateProductRequest req) {
    if (productRepository.existsByName(req.getName())) {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "Product already exists.");
    }

    Product product = new Product(req.getName(), req.getQuantity(), req.getPrice());
    return productRepository.save(product);
  }

  public Product sellProduct(ChangeProduct req) {
    Product product = productRepository.findByName(req.getName())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

    if (product.getStock() - req.getQuantity() >= 0) {
      product.setStock(product.getStock() - req.getQuantity());
      return productRepository.save(product);
    } else {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "Insufficient product to sell");
    }
  }

  public Product addQuantity(ChangeProduct req) {
    Product product = productRepository.findByName(req.getName())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found."));

    List<ProductRequirement> requirements = requirementRepository.getByProductId(product.getId());

    // Verifica se a quantidade de cada matéria prima é suficiente para produção
    for (ProductRequirement requirement : requirements) {
      RawMaterial material = requirement.getRawMaterial();

      int requiredAmount = requirement.getQuantity() * req.getQuantity();

      if (requiredAmount > material.getStock()) {
        throw new ResponseStatusException(HttpStatus.CONFLICT, "Insufficient raw material to produce");
      }
    }

    // Efetiva operação
    for (ProductRequirement requirement : requirements) {
      RawMaterial material = requirement.getRawMaterial();

      int requirementAmount = requirement.getQuantity() * req.getQuantity();

      material.setStock(material.getStock() - requirementAmount);
      rawMaterialRepository.save(material);
    }

    product.setStock(product.getStock() + req.getQuantity());
    productRepository.save(product);


    return product;
  }

  public List<Product> query() {
    return productRepository.findAll();
  }
}

