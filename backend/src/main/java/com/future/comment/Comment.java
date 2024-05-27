package com.future.comment;

import com.future.furniture.Furniture;
import com.future.user.User;
import jakarta.persistence.*;

@Entity
@Table
public class Comment {
    @Id
    @SequenceGenerator(
            name = "comment_sequence",
            sequenceName = "comment_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "comment_sequence"
    )
    private Long id;

    private String content;

    @ManyToOne
    private Furniture furniture;

    @ManyToOne
    private User user;

    public Comment() {
    }

    public Comment(Long id, String content, Furniture furniture, User user) {
        this.id = id;
        this.content = content;
        this.furniture = furniture;
        this.user = user;
    }

    public Comment(String content, Furniture furniture, User user) {
        this.content = content;
        this.furniture = furniture;
        this.user = user;
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
