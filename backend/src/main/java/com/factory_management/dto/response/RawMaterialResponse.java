package com.factory_management.dto.response;

public class RawMaterialResponse{
  private String name;
  private Integer stock;

  public RawMaterialResponse(String name, Integer stock) {
    this.name = name;
    this.stock = stock;
  }

  public String getName(){ return name; }
  public Integer getStock() { return stock; }
}