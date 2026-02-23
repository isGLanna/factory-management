package com.factory_management.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class ChangeProductRequest {
  @NotBlank
  private String name;

  @NotNull
  @Positive
  private Integer amount;

  @NotNull
  private Integer price;

  public String getName() {
    return name;
  }

  public Integer getAmount() {
    return amount;
  }

  public Integer getPrice() {
    return price;
  }
}
