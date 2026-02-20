package com.factory_management.dto.response;

public class ProductFormatting {
  private String name;
  private int amount;
  private int profit;
  private int cost;

  public ProductFormatting(String name, int amount, int price, int cost) {
    this.name = name;
    this.amount = amount;
    this.profit = price * amount;
    this.cost = cost;
  }

  public String getName() { return name; }
  public int getAmount() { return amount; }
  public int getIncome() { return profit; }
  public int getCost() { return cost; }
}