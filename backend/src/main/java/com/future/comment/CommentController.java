package com.future.comment;

import com.future.furniture.Furniture;
import com.future.furniture.FurnitureRepository;
import com.future.user.AuthorizationFilter;
import com.future.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private FurnitureRepository furnitureRepository;
    @Autowired
    private AuthorizationFilter authorizationFilter;

    @GetMapping
    public List<Comment> getFurnitureComments(
            @RequestParam Long furnitureId
    ) {
        Optional<Furniture> furniture = furnitureRepository.findById(furnitureId);
        if (furniture.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Furniture not found");
        }
        return commentRepository.findByFurniture(furniture.get());
    }

    @PostMapping
    public void addComment(
            @RequestParam Long furnitureId,
            @RequestParam String content,
            @RequestParam String token
    ) {
        Furniture furniture = furnitureRepository.findById(furnitureId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Furniture not found"));
        User user = authorizationFilter.requiresLogin(token);
        Comment comment = new Comment();
        comment.setFurniture(furniture);
        comment.setContent(content);
        comment.setUser(user);
        commentRepository.save(comment);
    }
}
