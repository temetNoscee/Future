package com.future.furniture;

import com.future.comment.Comment;
import com.future.question.Question;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table
public class Furniture {
    @Id
    @SequenceGenerator(
            name = "furniture_sequence",
            sequenceName = "furniture_sequence",
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
    private String imageId;
    private Boolean isEditorsPick;
    private Integer stock;
    @Column(length = 1000)
    private String description;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Comment> comments;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Question> questions;

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public enum FurnitureCategory {
        CHAIR,
        FLOOR_LAMP,
        SOFA,
    }

    public Furniture(Long id, String name, BigDecimal price, FurnitureCategory category, String imageId, Boolean isEditorsPick, Integer stock, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageId = imageId;
        this.isEditorsPick = isEditorsPick;
        this.stock = stock;
        this.description = description;
    }

    public Furniture() {
    }

    public Furniture(String name, BigDecimal price, FurnitureCategory category, String imageId, Boolean isEditorsPick, Integer stock, String description) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageId = imageId;
        this.isEditorsPick = isEditorsPick;
        this.stock = stock;
        this.description = description;
    }

    public Boolean getEditorsPick() {
        return isEditorsPick;
    }

    public void setEditorsPick(Boolean editorsPick) {
        isEditorsPick = editorsPick;
    }

    public String getImageId() {
        return imageId;
    }

    public void setImageId(String imageId) {
        this.imageId = imageId;
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
                ", imageId=" + imageId +
                ", isEditorsPick=" + isEditorsPick +
                '}';
    }
}
