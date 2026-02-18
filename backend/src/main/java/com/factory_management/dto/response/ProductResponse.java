package com.factory_management.dto.response;

import jakarta.validation.constraints.NotBlank;

public class ProductResponse {
  private String name;
  private Integer amount;
  private float price;

  public ProductResponse(String name, Integer amount, float price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  public String getName() { return name; }
  public Integer getAmount() { return amount; }
  public float getPrice() { return price; }
}
