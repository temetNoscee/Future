package com.future.furniture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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
}
