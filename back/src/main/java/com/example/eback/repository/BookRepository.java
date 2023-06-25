package com.example.eback.repository;

import com.example.eback.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {

    Book findBookById(int id);
    void deleteBookByid(int id);
    List<Book> findBooksByNameContains(String str);

    List<Book> findBooksByNameContaining(String str);
}