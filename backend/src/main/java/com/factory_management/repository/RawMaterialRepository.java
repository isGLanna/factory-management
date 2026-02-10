package com.factory_management.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.factory_management.entities.RawMaterial;

public interface RawMaterialRepository extends JpaRepository<RawMaterial, Long> {
  boolean existsByName(String name);

  Optional<RawMaterial> findByName(String name);
}
