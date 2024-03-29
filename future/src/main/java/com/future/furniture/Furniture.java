package com.future.furniture;

import jakarta.persistence.*;

import java.math.BigDecimal;
@Entity
@Table
public class Furniture {
    @Id
    @SequenceGenerator(
            name="furniture_sequence",
            sequenceName="furniture_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "furniture_sequence"
    )
    private Long id;
    private String name;
    private BigDecimal price;
    private FurnitureCategory category;

    public enum FurnitureCategory{
        Chair,
        Floor_lamp,
        Sofa
    }

    public Furniture(Long id, String name, BigDecimal price, FurnitureCategory category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public Furniture() {
    }

    public Furniture(String name, BigDecimal price, FurnitureCategory category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public FurnitureCategory getCategory() {
        return category;
    }

    public void setCategory(FurnitureCategory category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Furniture{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", category=" + category +
                '}';
    }
}
