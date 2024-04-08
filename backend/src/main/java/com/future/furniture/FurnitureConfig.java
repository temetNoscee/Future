package com.future.furniture;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

import static com.future.furniture.FurnitureUtil.generateDummyFurnitures;

@Configuration
public class FurnitureConfig {
    @Bean
    CommandLineRunner commandLineRunner(FurnitureRepository repository) {
        return args -> {
            List<Furniture> dummyFurnitures = generateDummyFurnitures(50);
            repository.saveAll(dummyFurnitures);
        };
    }
}
