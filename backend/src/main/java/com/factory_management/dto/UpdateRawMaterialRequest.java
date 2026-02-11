package com.factory_management.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;


public class UpdateRawMaterialRequest {
  @NotBlank
  private String name;

  @NotNull
  private Integer quantity;

  public String getName(){
    return name;
  }

  public Integer getQuantity(){
    return quantity;
  }
}
