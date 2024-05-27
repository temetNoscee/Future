package com.future.furniture;

import com.future.furniture.Furniture.FurnitureCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api")

public class FurnitureController {
    private final FurnitureService furnitureService;
    private final FurnitureRepository furnitureRepository;

    @Autowired
    public FurnitureController(FurnitureService furnitureService, FurnitureRepository furnitureRepository) {
        this.furnitureService = furnitureService;
        this.furnitureRepository = furnitureRepository;
    }

    @GetMapping("/furniture/all")
    public List<Furniture> getAllFurnitures() {
        return furnitureRepository.findAll();
    }

    @GetMapping
    public Page<Furniture> getAllFurnitures(
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "9") Integer size
    ) {
        Pageable pageable = Pageable.ofSize(size).withPage(page);
        return furnitureService.getAllFurnitures(pageable);
    }

    @GetMapping(params = {"name", "category"})
    public Page<Furniture> searchFurnitureByName(
            @RequestParam String name,
            @RequestParam(required = false) Optional<FurnitureCategory> category,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size
    ) {
        Pageable pageable = Pageable.ofSize(size).withPage(page);
        if (name.isBlank() && category.isEmpty()) {
            return furnitureService.getAllFurnitures(pageable);
        }
        if (name.isBlank()) {
            return furnitureService.getFurnitureByCategory(category.get(), pageable);
        }
        if (category.isEmpty()) {
            return furnitureService.searchFurnitureByName(name, pageable);
        }
        return furnitureService.searchFurnitureByNameAndCategory(name, category.get(), pageable);
    }

    @GetMapping
    @RequestMapping(path = "/categories")
    public List<FurnitureCategory> getCategories() {
        return Arrays.asList(FurnitureCategory.values());
    }

    @GetMapping
    @RequestMapping(path = "/editors-pick")
    public List<Furniture> getEditorsPick() {
        return furnitureService.getEditorsPick();
    }

    /*DENEMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/
    @GetMapping
    @RequestMapping(path = "/shop/{id}")
    public Furniture getSelectedProduct(@PathVariable Long id) {
        return furnitureService.getSelectedProduct(id);
    }

    @PostMapping("/furniture/{id}/change-stock")
    public void changeStock(@PathVariable Long id, @RequestParam Integer stock) {
        //TODO: This should require admin privileges.
        Furniture furniture = furnitureRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Furniture not found"));
        furniture.setStock(stock);
        furnitureRepository.save(furniture);
    }
}
