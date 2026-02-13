package com.factory_management.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class CreateRawMaterialRequest {
  @NotBlank
  private String name;

  @NotNull
  @Positive
  private Integer amount;

  public String getName() {
    return name;
  }

  public Integer getAmount() {
    return amount;
  }
}
