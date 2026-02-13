package com.factory_management.dto.response;

import jakarta.validation.constraints.NotBlank;

public class ProductResponse {
  private String name;
  private Integer stock;
  private float price;

  public ProductResponse(String name, Integer stock, float price) {
    this.name = name;
    this.stock = stock;
    this.price = price;
  }

  public String getName() { return name; }
  public Integer getStock() { return stock; }
  public float getPrice() { return price; }
}
