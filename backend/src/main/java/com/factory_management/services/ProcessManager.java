package com.factory_management.services;

import com.factory_management.entities.Product;
import com.factory_management.entities.ProductRequirement;
import com.factory_management.entities.RawMaterial;

import java.util.List;

public class ProcessManager {
  private List<RawMaterial> materials;
  private List<Product> products;
  private List<ProductRequirement> productRequirements;

  public ProcessManager(List<RawMaterial> materials, List<Product> products, List<ProductRequirement> productRequirements) {
    this.materials = materials;
    this.products = products;
    this.productRequirements = productRequirements;
  }
}
