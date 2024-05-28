package com.future.furniture;

import com.future.furniture.Furniture.FurnitureCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.math.BigDecimal;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/furniture")

public class FurnitureController {
    private final FurnitureService furnitureService;
    private final FurnitureRepository furnitureRepository;

    @Autowired
    public FurnitureController(FurnitureService furnitureService, FurnitureRepository furnitureRepository) {
        this.furnitureService = furnitureService;
        this.furnitureRepository = furnitureRepository;
    }

    @GetMapping("/{id}/thumbnail")
    public ResponseEntity<Resource> getImage(@PathVariable Long id) {
        Furniture furniture = furnitureRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Furniture not found"));
        Path path = Path.of("src/main/resources/static/images/" + furniture.getImageId() + ".jpg");
        Resource resource = null;
        try {
            resource = new UrlResource(path.toUri());
        } catch (MalformedURLException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to load image");
        }
        return ResponseEntity
                .ok()
                .contentType(MediaType.parseMediaType("image/jpg"))
                .body(resource);
    }

    @PostMapping
    public Long addFurniture(
            @RequestParam MultipartFile image,
            @RequestParam String name,
            @RequestParam BigDecimal price,
            @RequestParam FurnitureCategory category,
            @RequestParam Integer stock
    ) {
        //TODO: This should require admin privileges.
        Furniture furniture = new Furniture();
        furniture.setName(name);
        furniture.setPrice(price);
        furniture.setCategory(category);
        furniture.setStock(stock);
        furniture.setEditorsPick(false);

        UUID imageId = UUID.randomUUID();
        String imageName = imageId + ".jpg";
        try {
            image.transferTo(Path.of("src/main/resources/static/images/" + imageName));
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to save image");
        }
        furniture.setImageId(imageId.toString());
        return furnitureRepository.save(furniture).getId();
    }

    @GetMapping("/all")
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
    @RequestMapping(path = "/{id}")
    public Furniture getSelectedProduct(@PathVariable Long id) {
        return furnitureService.getSelectedProduct(id);
    }

    @PostMapping("/{id}/change-stock")
    public void changeStock(@PathVariable Long id, @RequestParam Integer stock) {
        //TODO: This should require admin privileges.
        Furniture furniture = furnitureRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Furniture not found"));
        furniture.setStock(stock);
        furnitureRepository.save(furniture);
    }
}
