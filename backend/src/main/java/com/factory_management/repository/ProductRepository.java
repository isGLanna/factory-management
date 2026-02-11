package com.factory_management.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.factory_management.entities.Product;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
  boolean existsByName(String name);

  Optional<Product> findByName(String name);
}
