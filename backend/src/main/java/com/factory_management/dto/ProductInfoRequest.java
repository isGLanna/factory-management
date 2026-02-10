package com.factory_management.dto;

import jakarta.validation.constraints.NotBlank;

public class ProductInfoRequest {
  @NotBlank
  private String name;

  public String getName() {
    return name;
  }
}
