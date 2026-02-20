package com.factory_management.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "raw_material")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RawMaterial {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true)
  private String name;

  @Column(nullable = false)
  private int amount;

  @Column(nullable = true)
  private Integer price;

  public RawMaterial(String name, int amount, int price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }
}