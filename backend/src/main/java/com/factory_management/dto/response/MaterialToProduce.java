package com.factory_management.dto.response;

public class MaterialToProduce {
  private String name;
  private int amount;

  public MaterialToProduce(String name, int amount) {
    this.name = name;
    this.amount = amount;
  }

  public String getName() { return name; }
  public int getAmount() { return amount; }
}
