package com.factory_management.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;

import java.util.List;

public class CreateProductRequest {
  @NotBlank
  private String name;

  @NotNull
  @Positive
  private Integer amount;

  @NotNull
  @Positive
  @Digits(integer = 10, fraction = 2)
  private float price;

  @NotEmpty
  @Valid
  private List<ProductMaterialRequest> materials;

  public String getName() {
    return name;
  }

  public Integer getAmount(){
    return amount;
  }

  public float getPrice(){
    return price;
  }

  public List<ProductMaterialRequest> getMaterials(){
    return materials;
  }
}
