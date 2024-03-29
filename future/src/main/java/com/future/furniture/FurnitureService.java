package com.future.furniture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service

public class FurnitureService {

    private final FurnitureRepository furnitureRepository;

    @Autowired
    public FurnitureService(FurnitureRepository furnitureRepository) {
        this.furnitureRepository = furnitureRepository;
    }

    public Page<Furniture> getAllFurnitures(Pageable pageable) {
        return furnitureRepository.findAll(pageable);
    }

    public Page<Furniture> searchFurnitureByName(String name, Pageable pageable) {
        return furnitureRepository.searchFurnitureByName(name, pageable);
    }

    public Page<Furniture> getFurnitureByCategory(Furniture.FurnitureCategory category, Pageable pageable) {
        return furnitureRepository.getFurnitureByCategory(category, pageable);
    }

    public Page<Furniture> searchFurnitureByNameAndCategory(String name, Furniture.FurnitureCategory category, Pageable pageable) {
        return furnitureRepository.searchFurnitureByNameAndCategory(name, category, pageable);
    }
}
