package com.factory_management.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "product_requirement",
        uniqueConstraints =
                {@UniqueConstraint(columnNames = {"product_id", "raw_material_id"})}
)
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequirement {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private Integer amount;

  @ManyToOne(optional = false)
  @JoinColumn(name = "product_id", nullable = false)
  private Product product;

  @ManyToOne(optional = false)
  @JoinColumn(name = "raw_material_id", nullable = false)
  private RawMaterial rawMaterial;
}
