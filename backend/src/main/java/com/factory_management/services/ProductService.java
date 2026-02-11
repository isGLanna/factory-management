package com.factory_management.services;

import com.factory_management.dto.request.ChangeProducConfigRequest;
import com.factory_management.dto.request.ChangeProductRequest;
import com.factory_management.dto.request.CreateProductRequest;
import com.factory_management.dto.request.ProductMaterialRequest;
import com.factory_management.dto.response.ProductResponse;
import com.factory_management.entities.Product;
import com.factory_management.entities.ProductRequirement;

import com.factory_management.entities.RawMaterial;
import com.factory_management.repository.ProductRepository;
import com.factory_management.repository.ProductRequirementsRepository;
import com.factory_management.repository.RawMaterialRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
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

  public void create(CreateProductRequest req) {
    if (productRepository.existsByName(req.getName())) {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "Product already exists.");
    }

    Product product = new Product(req.getName(), req.getAmount(), req.getPrice());

    product = productRepository.save(product);

    for (ProductMaterialRequest requirement : req.getMaterials()) {
      RawMaterial material = rawMaterialRepository.findByName(requirement.getName())
              .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Materail not found"));

      ProductRequirement productRequirement = new ProductRequirement(null, requirement.getAmount(), product, material);

      requirementRepository.save(productRequirement);
    }
  }

  public void updateConfig(ChangeProducConfigRequest req) {
    Product product = productRepository.findByName(req.getName())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "product not found"));

    requirementRepository.deleteRelationship(product.getId());

    for (ProductMaterialRequest requirement : req.getMaterials()) {
      RawMaterial material = rawMaterialRepository.findByName(requirement.getName())
              .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Material not found for relationship."));

      ProductRequirement productRequirement = new ProductRequirement(null, requirement.getAmount(), product, material);

      requirementRepository.save(productRequirement);
    }
  }

  public void sellProduct(ChangeProductRequest req) {
    Product product = productRepository.findByName(req.getName())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

    if (product.getStock() - req.getAmount() >= 0) {
      product.setStock(product.getStock() - req.getAmount());
      productRepository.save(product);
    } else {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "Insufficient product to sell");
    }
  }

  public void produceProduct(ChangeProductRequest req) {
    Product product = productRepository.findByName(req.getName())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found."));

    List<ProductRequirement> requirements = requirementRepository.getByProductId(product.getId());

    // Verifica se a quantidade de cada matéria prima é suficiente para produção
    for (ProductRequirement requirement : requirements) {
      RawMaterial material = requirement.getRawMaterial();

      int requiredAmount = requirement.getAmount() * req.getAmount();

      if (requiredAmount > material.getStock()) {
        throw new ResponseStatusException(HttpStatus.CONFLICT, "Insufficient raw material to produce");
      }
    }

    // Efetiva operação
    for (ProductRequirement requirement : requirements) {
      RawMaterial material = requirement.getRawMaterial();

      int requirementAmount = requirement.getAmount() * req.getAmount();

      material.setStock(material.getStock() - requirementAmount);
      rawMaterialRepository.save(material);
    }

    product.setStock(product.getStock() + req.getAmount());
    productRepository.save(product);
  }

  public List<ProductResponse> getAll() {
    List<Product> products = productRepository.findAll();

    List<ProductResponse> res = new ArrayList<>();

    for(Product product : products) {
      res.add(new ProductResponse(product.getName(), product.getStock(), product.getPrice()));
    }

    return res;
  }
}

