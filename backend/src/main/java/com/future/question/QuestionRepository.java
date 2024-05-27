package com.future.question;

import com.future.furniture.Furniture;
import com.future.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findByUserAndFurniture(User user, Furniture furniture);
}
