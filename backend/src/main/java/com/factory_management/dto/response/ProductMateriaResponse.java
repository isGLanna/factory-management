package com.factory_management.dto.response;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class ProductMateriaResponse {
  @NotBlank
  private String name;

  @NotNull
  @Positive
  private int amount;

  public String getName() {
    return name;
  }

  public int getAmount() {  return amount;  }

}
