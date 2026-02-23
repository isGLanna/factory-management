package com.factory_management.dto.request;

import jakarta.validation.constraints.Positive;

public class ProductMaterialRequest {
  private String name;

  @Positive
  private Integer amount;

  public String getName() { return name; }

  public Integer getAmount() {  return amount;  }
}
