package com.deus.ehealthcare.service;

import com.deus.ehealthcare.entity.Product;

import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);

    Product updateProduct(Product product);

    void deleteProduct(Long productId);

    Long numberOfProducts();

    List<Product> findAllProducts();

}
