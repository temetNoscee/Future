package com.future.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TokenRepository tokenRepository;

    @PostMapping(path = "/signup")
    public String signUp(@RequestParam String username, @RequestParam String password, @RequestParam String email) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        userRepository.save(user);

        UUID token = UUID.randomUUID();
        Token userToken = new Token();
        userToken.setToken(token.toString());
        userToken.setUser(user);
        tokenRepository.save(userToken);
        return token.toString();
    }

    @PostMapping(path = "/login")
    public String login(@RequestParam String email, @RequestParam String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            Optional<Token> token = tokenRepository.findByUser(user.get());
            if (token.isEmpty()) {
                UUID newToken = UUID.randomUUID();
                Token userToken = new Token();
                userToken.setToken(newToken.toString());
                userToken.setUser(user.get());
                tokenRepository.save(userToken);
                return newToken.toString();
            }
            return token.get().getToken();
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
    }

    @GetMapping(path = "/profile")
    public Profile getProfile(@RequestParam String token) {
        Optional<Token> userToken = tokenRepository.findByToken(token);
        if (userToken.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Token not found");
        }
        User user = userToken.get().getUser();
        return new Profile(
                user.getUsername(),
                user.getEmail(),
                user.getAdmin()
        );
    }

    public record Profile(String username, String email, Boolean isAdmin) {
    }
}
