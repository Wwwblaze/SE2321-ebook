package com.example.eback.dao;
import com.example.eback.entity.Book;
import com.example.eback.entity.OrderItem;
import com.example.eback.entity.Orders;
import com.example.eback.entity.Shopcart;

import java.util.List;
import java.util.Map;

public interface bookDao {



    List<Book> getBooks();
    boolean deleteBook(Book book);

    boolean addBook(Book book);

    List<Shopcart> getShopcarts(int userId);

    List<Orders> getOrders(int userId);

    List<OrderItem> getorderitem(int userId);

    List<OrderItem> getallorderitem();


    List<Orders> getallorder();

    void addshopcart(Shopcart shopcart);

    boolean deleteshopcart(Shopcart shopcart);

    boolean addorder(List<OrderItem> orders);
    List<Book> searchbook(String str);

}
