package com.factory_management.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Digits;

public class ChangeProduct {
  @NotBlank
  public String name;

  @NotNull
  @Positive
  public Integer quantity;

  @Digits(integer = 10, fraction = 2)
  public float price;
}
