package com.deus.ehealthcare.service;

import com.deus.ehealthcare.dao.UserRepository;
import com.deus.ehealthcare.dto.Purchase;
import com.deus.ehealthcare.dto.PurchaseResponse;
import com.deus.ehealthcare.entity.User;
import com.deus.ehealthcare.entity.Order;
import com.deus.ehealthcare.entity.OrderItem;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private UserRepository userRepository;

    public CheckoutServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {

        // retrieve the order info from dto
        Order order = purchase.getOrder();

        // generate tracking number
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        // populate order with orderItems
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        // populate order with billingAddress and shippingAddress
        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());

        // populate customer with order
        User user = purchase.getUser();
        user.add(order);

        // save to the database
        userRepository.save(user);

        // return a response
        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {

        // generate a random UUID number (UUID version-4)
        return UUID.randomUUID().toString();
    }
}

