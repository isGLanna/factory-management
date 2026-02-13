package com.factory_management.repository;

import com.factory_management.entities.ProductRequirement;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.hibernate.boot.model.NamedEntityGraphDefinition.Source.JPA;

@Repository
public interface ProductRequirementsRepository extends JpaRepository<ProductRequirement, Long> {
  List<ProductRequirement> getByProductId(Long id);

  @Modifying
  @Transactional
  @Query(value = "DELETE FROM ProductRequirement as pr WHERE pr.product.id = :productId")
  void deleteRelationship(@Param("productId") Long productId);

  List<ProductRequirement> findByProductId(Long productId);
  }
