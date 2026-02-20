package com.factory_management.dto.response;

public class RawMaterialResponse{
  private String name;
  private int amount;
  private int price;

  public RawMaterialResponse(String name, int amount, int price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  public String getName(){ return name; }
  public int getAmount() { return amount; }
  public int getPrice() { return price; }
}