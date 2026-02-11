package com.factory_management.repository;

import com.factory_management.entities.ProductRequirement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.hibernate.boot.model.NamedEntityGraphDefinition.Source.JPA;

@Repository
public interface ProductRequirementsRepository extends JpaRepository<ProductRequirement, Long> {
  List<ProductRequirement> getByProductId(Long id);
}
