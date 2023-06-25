package com.example.eback.service;

import com.example.eback.entity.Book;
import com.example.eback.entity.OrderItem;
import com.example.eback.entity.Shopcart;
import com.example.eback.entity.Orders;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

public interface BookService {
    List<Book> getBooks();
    boolean deleteBook(Book book);

    boolean addBook(Book book);

    List<Book> searchbook(String str);

    List<Shopcart> getShopcarts(int userId);

    List<Orders> getOrders(int userId);

    List<OrderItem> getorderitem(int userId);

    List<OrderItem> getallorderitem();

    List<Orders> getallorder();

    void addshopcart(Shopcart shopcart);

    boolean deleteshopcart(Shopcart shopcart);

    boolean addorder(List<OrderItem> orders);

}
