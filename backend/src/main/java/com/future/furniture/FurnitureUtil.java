package com.future.furniture;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class FurnitureUtil {
    private static final String[] FURNITURE_NAMES = {"sandalye", "kanape", "lamba"/* Add more product names here */};
    private static final BigDecimal[] FURNITURE_PRICES = {new BigDecimal("12.99"), new BigDecimal("2.99"), new BigDecimal("1.75"), new BigDecimal("2.15"), new BigDecimal("12.87"), new BigDecimal("12.87"), new BigDecimal("12.87"), new BigDecimal("12.87") /* Add more product prices here */};
    private static final Furniture.FurnitureCategory[] FURNITURE_CATEGORIES = {Furniture.FurnitureCategory.CHAIR, Furniture.FurnitureCategory.FLOOR_LAMP, Furniture.FurnitureCategory.SOFA};

    public static List<Furniture> generateDummyFurnitures(int count) {
        List<Furniture> furnitures = new ArrayList<>();
        Random random = new Random();
        for (int i = 0; i < count; i++) {
            String name = FURNITURE_NAMES[random.nextInt(FURNITURE_NAMES.length)];
            BigDecimal price = FURNITURE_PRICES[random.nextInt(FURNITURE_PRICES.length)];
            Furniture.FurnitureCategory category = FURNITURE_CATEGORIES[random.nextInt(FURNITURE_CATEGORIES.length)];
            String imageId = String.valueOf(random.nextInt(5) + 1);
            Furniture furniture = new Furniture(name, price, category, imageId, false);
            furnitures.add(furniture);
        }

        for (int i = 0; i < 5; i++) {
            furnitures.get(i).setEditorsPick(true);
        }
        return furnitures;
    }
}
