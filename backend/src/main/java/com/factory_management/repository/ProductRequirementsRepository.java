package com.factory_management.repository;

import com.factory_management.dto.response.MaterialToProduce;
import com.factory_management.entities.ProductRequirement;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRequirementsRepository extends JpaRepository<ProductRequirement, Long> {
  List<ProductRequirement> getByProductId(Long id);

  @Modifying
  @Transactional
  @Query(value = "DELETE FROM ProductRequirement as pr WHERE pr.product.id = :productId")
  void deleteRelationship(@Param("productId") Long productId);

  @Query(value = "SELECT new com.factory_management.dto.response.MaterialToProduce(rm.name, pr.amount, rm.price) " +
                    "FROM ProductRequirement AS pr " +
                    "JOIN pr.rawMaterial rm " +
                  "WHERE pr.product.id = :productId")
  List<MaterialToProduce> findMaterialsByProductId(@Param("productId") Integer productId);

  List<ProductRequirement> findByProductId(Long productId);
  }
