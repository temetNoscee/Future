package com.future.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner runner(UserRepository userRepository, TokenRepository tokenRepository) {
        return args -> {
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
        };
    }
}
