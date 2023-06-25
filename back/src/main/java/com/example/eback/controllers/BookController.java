package com.example.eback.controllers;

import com.example.eback.entity.Book;
import com.example.eback.entity.Shopcart;
import com.example.eback.entity.Orders;
import com.example.eback.entity.OrderItem;
import com.example.eback.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;


    @RequestMapping("/getbooks")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @CrossOrigin
    @PostMapping("/searchbook")
    public List<Book> searchbook(@RequestBody String str){
        return bookService.searchbook(str);
    }

    @CrossOrigin
    @PostMapping("/deletebook")
    public boolean deleteBook(@RequestBody Book book){
        return bookService.deleteBook(book);
    }

    @CrossOrigin
    @PostMapping("/addbook")
    public boolean addBook(@RequestBody Book book){
        return bookService.addBook(book);
    }


    @CrossOrigin
    @PostMapping("/getorder")
    public List<Orders> getorder(@RequestBody int userId){
        return bookService.getOrders(userId);
    }

    @CrossOrigin
    @PostMapping("/getorderitem")
    public List<OrderItem> getorderitem(@RequestBody int userId){
        return bookService.getorderitem(userId);
    }

    @CrossOrigin
    @PostMapping("/getallorderitem")
    public List<OrderItem> getallorderitem(){
        return bookService.getallorderitem();
    }

    @CrossOrigin
    @PostMapping("/getallorder")
    public List<Orders> getallorder(){
        return bookService.getallorder();
    }

    @CrossOrigin
    @PostMapping("/getshopcart")
    public List<Shopcart> getshopcart(@RequestBody int userId){
        return bookService.getShopcarts(userId);
    }

    @CrossOrigin
    @PostMapping("/addshopcart")
    public void addshopcart(@RequestBody Shopcart shopcart){
        final Logger log = LoggerFactory.getLogger(BookController.class);
        log.info("addshopcart");
        bookService.addshopcart(shopcart);
    }

    @CrossOrigin
    @PostMapping("/deleteshopcart")
    public boolean deleteshopcart(@RequestBody Shopcart shopcart){
        final Logger log = LoggerFactory.getLogger(BookController.class);
        log.info("deleteshopcart");
        return bookService.deleteshopcart(shopcart);
    }

    @CrossOrigin
    @PostMapping("/addorder")
    public boolean addorder(@RequestBody List<OrderItem> orders){
        return bookService.addorder(orders);
    }





}