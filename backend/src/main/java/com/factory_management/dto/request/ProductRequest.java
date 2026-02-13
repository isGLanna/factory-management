package com.factory_management.dto.request;

import jakarta.validation.constraints.NotBlank;

public class ProductRequest {
  @NotBlank
  private String name;

  public String getName() {
    return name;
  }
}
