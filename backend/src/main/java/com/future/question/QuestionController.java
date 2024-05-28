package com.future.question;

import com.future.furniture.Furniture;
import com.future.furniture.FurnitureRepository;
import com.future.user.AuthorizationFilter;
import com.future.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/question")
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private AuthorizationFilter authorizationFilter;
    @Autowired
    private FurnitureRepository furnitureRepository;

    @GetMapping
    public List<Question> getQuestions(@RequestParam String token) {
        authorizationFilter.requiresAdmin(token);
        return questionRepository.findAll();
    }

    @GetMapping("/my-question")
    public Question myQuestion(@RequestParam String token, @RequestParam Long furnitureId) {
        User user = authorizationFilter.requiresLogin(token);
        Furniture furniture = furnitureRepository.findById(furnitureId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Furniture not found"));
        return questionRepository.findByUserAndFurniture(user, furniture)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Question not found"));
    }

    @PostMapping("/{id}/answer")
    public void answerQuestion(@PathVariable Long id, @RequestParam String response, @RequestParam String token) {
        authorizationFilter.requiresAdmin(token);
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Question not found"));
        question.setResponse(response);
        questionRepository.save(question);
    }

    @PostMapping
    public void addQuestion(
            @RequestParam String content,
            @RequestParam String token,
            @RequestParam Long furnitureId
    ) {
        User user = authorizationFilter.requiresLogin(token);
        Furniture furniture = furnitureRepository.findById(furnitureId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Furniture not found"));
        Question question = new Question();
        question.setResponse(null);
        question.setContent(content);
        question.setUser(user);
        question.setFurniture(furniture);
        questionRepository.save(question);
    }
}
