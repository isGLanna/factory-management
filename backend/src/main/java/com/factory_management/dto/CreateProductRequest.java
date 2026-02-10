package com.factory_management.dto;

import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Digits;

public class CreateProductRequest {
  @NotBlank
  private String name;

  @NotNull
  @Positive
  private Integer quantity;

  @NotNull
  @Positive
  @Digits(integer = 10, fraction = 2)
  private float price;

  public String getName() {
    return name;
  }

  public Integer getQuantity(){
    return quantity;
  }

  public float getPrice(){
    return price;
  }
}
