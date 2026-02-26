package com.factory_management.dto.response;

public class ProductFormatting {
  private String name;
  private int amount;
  private int profit;
  private int cost;

  public ProductFormatting(String name, int amount, int profit, int cost) {
    this.name = name;
    this.amount = amount;
    this.profit = profit;
    this.cost = cost;
  }

  public String getName() { return name; }
  public int getAmount() { return amount; }
  public int getProfit() { return profit; }
  public int getCost() { return cost; }
}