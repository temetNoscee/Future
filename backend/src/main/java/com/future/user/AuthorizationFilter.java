package com.future.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class AuthorizationFilter {
    @Autowired
    private TokenRepository tokenRepository;
    @Autowired
    private UserRepository userRepository;

    public User requiresLogin(String token) {
        Optional<Token> userToken = tokenRepository.findByToken(token);
        if (userToken.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid token");
        }
        return userToken.get().getUser();
    }
}
