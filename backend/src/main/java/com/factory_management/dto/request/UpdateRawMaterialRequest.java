package com.factory_management.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;


public class UpdateRawMaterialRequest {
  @NotBlank
  private String name;

  @NotNull
  private Integer amount;

  private int price;

  public String getName(){
    return name;
  }

  public int getAmount(){
    return amount;
  }

  public int getPrice() {
    return price;
  }
}
