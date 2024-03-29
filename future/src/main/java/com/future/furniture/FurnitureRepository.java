package com.future.furniture;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FurnitureRepository extends JpaRepository<Furniture,Long> {

    @Query("SELECT f FROM Furniture f WHERE f.name LIKE %:name%")
    List<Furniture> searchFurnitureByName(String name);

    List<Furniture> getFurnitureByCategory(Furniture.FurnitureCategory category);
}
