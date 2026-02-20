package com.factory_management.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;

import java.util.List;

public class CreateProductRequest {
  @NotBlank
  private String name;

  @NotNull
  @Positive
  private int amount;

  @NotNull
  @Positive
  private int price;

  @NotEmpty
  @Valid
  private List<ProductMaterialRequest> materials;

  public String getName() {
    return name;
  }

  public int getAmount() {
    return amount;
  }

  public int getPrice(){
    return price;
  }

  public List<ProductMaterialRequest> getMaterials(){
    return materials;
  }
}
