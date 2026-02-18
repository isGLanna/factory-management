package com.factory_management.dto.response;

public class RawMaterialResponse{
  private String name;
  private Integer amount;

  public RawMaterialResponse(String name, Integer amount) {
    this.name = name;
    this.amount = amount;
  }

  public String getName(){ return name; }
  public Integer getAmount() { return amount; }
}