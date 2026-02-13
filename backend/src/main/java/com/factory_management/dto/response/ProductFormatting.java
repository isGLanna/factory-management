package com.factory_management.dto.response;

public class ProductFormatting {
  private String name;
  private Integer amount;
  private float income;

  public ProductFormatting(String name, Integer amount, float price) {
    this.name = name;
    this.amount = amount;
    this.income = price * amount;
  }

  public String getName() { return name; }
  public Integer getAmount() { return amount; }
  public float getIncome() { return income; }
}