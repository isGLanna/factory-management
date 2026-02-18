package com.factory_management.services;

import com.factory_management.dto.response.ProductFormatting;
import com.factory_management.dto.response.ProductionPlanningResponse;
import com.factory_management.entities.Product;
import com.factory_management.entities.ProductRequirement;
import com.factory_management.entities.RawMaterial;
import com.factory_management.repository.ProductRepository;
import com.factory_management.repository.ProductRequirementsRepository;
import com.factory_management.repository.RawMaterialRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class ProductionPlanningService {
  private final ProductRepository productRepository;
  private final ProductRequirementsRepository requirementRepository;
  private final RawMaterialRepository rawMaterialRepository;

  public ProductionPlanningService(ProductRepository productRepository, ProductRequirementsRepository requirementRepository, RawMaterialRepository rawMaterialRepository) {
    this.productRepository = productRepository;
    this.requirementRepository = requirementRepository;
    this.rawMaterialRepository = rawMaterialRepository;
  }

  public ProductionPlanningResponse OptmizeProcess() {
    List<Product> products = productRepository.findAll();
    List<RawMaterial> materails = rawMaterialRepository.findAll();
    List<ProductRequirement> requirements = requirementRepository.findAll();

    ProductionPlanningResponse  productionPlanning = new ProductionPlanningResponse();
    products.sort(Comparator.comparing(Product::getPrice).reversed());

    for(Product product : products) {
      int quantity = MaxProduce(product.getId(), requirements, materails);
      materails = DiscountMaterials(materails, requirements, quantity, product.getId());

      productionPlanning.add(new ProductFormatting(product.getName(), quantity, product.getPrice()));
    }

    return productionPlanning;
  }

  public Integer CalculateMaxProduction(String name) {
    Product product = productRepository.findByName(name)
            .orElseThrow(() -> new RuntimeException("Product not found."));

    List<ProductRequirement> requirements = requirementRepository.findByProductId(product.getId());
    List<RawMaterial> materials = new ArrayList<>();

    for (ProductRequirement requirement : requirements) {
      materials.add(requirement.getRawMaterial());
    }
    return MaxProduce(product.getId(), requirements, materials);
  }

  public Integer MaxProduce(Long productId, List<ProductRequirement> requirements, List<RawMaterial> materials) {
    List<Integer> maxValueAllowed = new ArrayList<>();

    for (ProductRequirement requirement : requirements) {

      if (!requirement.getProduct().getId().equals(productId)) {
        continue;
      }

      RawMaterial material = materials.stream()
              .filter(m -> m.getId().equals((requirement.getRawMaterial().getId())))
              .findFirst()
              .orElseThrow(() -> new IllegalArgumentException("Material not found"));

      int quantity = material.getAmount() / requirement.getAmount();

      maxValueAllowed.add(quantity);
    }

    return Collections.min(maxValueAllowed);
  }

  public List<RawMaterial> DiscountMaterials(List<RawMaterial> materials, List<ProductRequirement> requirements, Integer quantity, Long productId) {
    for (ProductRequirement requirement : requirements) {

      if (!requirement.getProduct().getId().equals(productId)) {
        continue;
      }

      RawMaterial material = materials.stream()
              .filter(m -> m.getId().equals((requirement.getRawMaterial().getId())))
              .findFirst()
              .orElseThrow(() -> new IllegalArgumentException("Material not found"));

      material.setAmount(material.getAmount() - requirement.getAmount() * quantity);
    }

    return materials;
  }
}
