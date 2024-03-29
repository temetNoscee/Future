package com.future.furniture;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FurnitureRepository extends JpaRepository<Furniture, Long> {

    @Query("SELECT f FROM Furniture f WHERE f.name LIKE %:name%")
    Page<Furniture> searchFurnitureByName(String name, Pageable pageable);

    Page<Furniture> getFurnitureByCategory(Furniture.FurnitureCategory category, Pageable pageable);

    @Query("SELECT f FROM Furniture f WHERE f.name LIKE %:name% AND f.category = %:category%")
    Page<Furniture> searchFurnitureByNameAndCategory(String name, Furniture.FurnitureCategory category, Pageable pageable);
}
