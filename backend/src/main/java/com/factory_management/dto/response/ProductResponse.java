package com.factory_management.dto.response;

import java.util.List;

public class ProductResponse {
  private String name;
  private Integer amount;
  private float price;
  List<MaterialToProduce> materials;

  public ProductResponse(String name, Integer amount, float price, List<MaterialToProduce> materials) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.materials = materials;
  }

  public String getName() { return name; }
  public Integer getAmount() { return amount; }
  public float getPrice() { return price; }
  public List<MaterialToProduce> getMaterials() { return materials; }
}
