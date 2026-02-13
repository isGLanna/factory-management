package com.factory_management.dto.request;

import jakarta.validation.constraints.NotBlank;

import java.util.List;

public class ChangeProducConfigRequest {
  @NotBlank
  private String name;

  List<ProductMaterialRequest> materials;

  public ChangeProducConfigRequest(String name, List<ProductMaterialRequest> materials) {
    this.name = name;
    this.materials = materials;
  }

  public String getName() { return name; }

  public List<ProductMaterialRequest> getMaterials() { return materials; }
}
