package com.example.eback.serviceimpl;

import com.example.eback.dao.bookDao;
import com.example.eback.entity.Book;
import com.example.eback.entity.OrderItem;
import com.example.eback.entity.Shopcart;
import com.example.eback.entity.Orders;
import com.example.eback.repository.OrderRepository;
import com.example.eback.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private bookDao bookDao;

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }

    public boolean deleteBook(Book book){
        return bookDao.deleteBook(book);
    }

    public boolean addBook(Book book){
        return bookDao.addBook(book);
    }

    public List<Shopcart> getShopcarts(int userId){
        return bookDao.getShopcarts(userId);
    }

    public List<Orders> getOrders(int userId){return bookDao.getOrders(userId);}

    public List<OrderItem> getorderitem(int userId){return bookDao.getorderitem(userId);}

    public List<OrderItem> getallorderitem(){return bookDao.getallorderitem();}

    public List<Orders> getallorder(){return bookDao.getallorder();}

    public void addshopcart(Shopcart shopcart){
        bookDao.addshopcart(shopcart);
    }

    public boolean deleteshopcart(Shopcart shopcart){return bookDao.deleteshopcart(shopcart);}

    public boolean addorder(List<OrderItem> orders){return bookDao.addorder(orders);}

    public List<Book> searchbook(String str){return bookDao.searchbook(str);}

}
