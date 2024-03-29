package com.future.furniture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @GetMapping(params = "name")
    public List<Furniture> searchFurnitureByName(@RequestParam String name) {
        return furnitureService.searchFurnitureByName(name);
    }
}
