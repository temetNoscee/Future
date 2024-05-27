package com.future.question;

import com.future.furniture.Furniture;
import com.future.user.User;
import jakarta.persistence.*;

@Entity
@Table
public class Question {
    @Id
    @SequenceGenerator(
            name = "question_sequence",
            sequenceName = "question_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "question_sequence"
    )
    private Long id;

    private String content;
    private String response;

    @ManyToOne
    private User user;

    @ManyToOne
    private Furniture furniture;

    public Question() {
    }

    public Question(Long id, String content, String response, User user, Furniture furniture) {
        this.id = id;
        this.content = content;
        this.response = response;
        this.user = user;
        this.furniture = furniture;
    }

    public Question(String content, String response, User user, Furniture furniture) {
        this.content = content;
        this.response = response;
        this.user = user;
        this.furniture = furniture;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public Furniture getFurniture() {
        return furniture;
    }

    public void setFurniture(Furniture furniture) {
        this.furniture = furniture;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
