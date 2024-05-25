package com.future.furniture;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FurnitureRepository extends JpaRepository<Furniture, Long> {

    @Query("SELECT f FROM Furniture f WHERE f.name LIKE %:name%")
    Page<Furniture> searchFurnitureByName(String name, Pageable pageable);

    Page<Furniture> getFurnitureByCategory(Furniture.FurnitureCategory category, Pageable pageable);

    @Query("SELECT f FROM Furniture f WHERE f.name LIKE %:name% AND f.category = %:category%")
    Page<Furniture> searchFurnitureByNameAndCategory(String name, Furniture.FurnitureCategory category, Pageable pageable);

    @Query("SELECT f FROM Furniture f WHERE f.isEditorsPick = true")
    List<Furniture> getEditorsPick();

    /*DENEMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/
    @Query("SELECT f FROM Furniture f WHERE f.id = :id")
    Furniture getSelectedProduct(@Param("id") Long id);
}
