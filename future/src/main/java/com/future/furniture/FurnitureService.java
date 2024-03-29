package com.future.furniture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class FurnitureService {

    private final FurnitureRepository furnitureRepository;
    @Autowired
    public FurnitureService(FurnitureRepository furnitureRepository) {
        this.furnitureRepository = furnitureRepository;
    }

    public List<Furniture> getAllFurnitures() {
        return furnitureRepository.findAll();
    }

    public List<Furniture> searchFurnitureByName(String name) {
        return furnitureRepository.searchFurnitureByName(name);
    }

    public List<Furniture> getFurnitureByCategory(Furniture.FurnitureCategory category) {
        return furnitureRepository.getFurnitureByCategory(category);
    }

    public List<Furniture> searchFurnitureByNameAndCategory(String name, Furniture.FurnitureCategory category) {
        return furnitureRepository.searchFurnitureByName(name).stream().filter(f -> f.getCategory() == category).toList();
    }
}
