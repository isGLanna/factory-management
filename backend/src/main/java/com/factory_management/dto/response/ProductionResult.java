package com.factory_management.dto.response;

public class ProductionResult {
    public int quantityMaterial;
    public int cost;

    public ProductionResult(int quantityMaterial, int cost) {
        this.quantityMaterial = quantityMaterial;
        this.cost = cost;
    }

    public int getQuantityMaterial() { return quantityMaterial; }
    public int getCost() { return cost; }
}
