package com.future;

import com.future.comment.CommentRepository;
import com.future.furniture.Furniture;
import com.future.furniture.FurnitureRepository;
import com.future.question.QuestionRepository;
import com.future.user.Token;
import com.future.user.TokenRepository;
import com.future.user.User;
import com.future.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

import static com.future.furniture.FurnitureUtil.generateDummyFurnitures;

@Configuration
public class MockConfig {
    @Bean
    CommandLineRunner createMockData(
            UserRepository userRepository,
            FurnitureRepository furnitureRepository,
            CommentRepository commentRepository,
            QuestionRepository questionRepository,
            TokenRepository tokenRepository
    ) {
        return args -> {
            tokenRepository.deleteAll();
            furnitureRepository.deleteAll();
            userRepository.deleteAll();
            User user = new User();
            user.setUsername("admin");
            user.setPassword("123");
            user.setEmail("admin@email.com");
            user.setAdmin(true);
            userRepository.save(user);
            Token token = new Token();
            token.setUser(user);
            token.setToken("admin-token");
            tokenRepository.save(token);

            List<Furniture> dummyFurnitures = generateDummyFurnitures(50);
            furnitureRepository.saveAll(dummyFurnitures);
        };
    }
}
