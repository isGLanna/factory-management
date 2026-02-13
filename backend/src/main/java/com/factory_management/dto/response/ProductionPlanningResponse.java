package com.factory_management.dto.response;

import java.util.ArrayList;
import java.util.List;

public class ProductionPlanningResponse {
  List<ProductFormatting> products = new ArrayList<>();

  public ProductionPlanningResponse() {}

  public void add(ProductFormatting product) {
    products.add(product);
  }

  public List<ProductFormatting> getProducts() {
    return products;
  }
}


