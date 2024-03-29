package com.future.furniture;

import com.future.furniture.Furniture.FurnitureCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api")

public class FurnitureController {
    private final FurnitureService furnitureService;
    @Autowired
    public FurnitureController(FurnitureService furnitureService) {
        this.furnitureService = furnitureService;
    }

    @GetMapping
    public List<Furniture> getAllFurnitures(){
        return furnitureService.getAllFurnitures();
    }

    @GetMapping(params = {"name", "category"})
    public List<Furniture> searchFurnitureByName(@RequestParam String name, @RequestParam(required = false) Optional<FurnitureCategory> category) {
        if (name.isBlank() && category.isEmpty()) {
            return furnitureService.getAllFurnitures();
        }
        if (name.isBlank()) {
            return furnitureService.getFurnitureByCategory(category.get());
        }
        if (category.isEmpty()) {
            return furnitureService.searchFurnitureByName(name);
        }
        return furnitureService.searchFurnitureByNameAndCategory(name, category.get());
    }

    @GetMapping
    @RequestMapping(path = "/categories")
    public List<FurnitureCategory> getCategories() {
        return Arrays.asList(FurnitureCategory.values());
    }
}
