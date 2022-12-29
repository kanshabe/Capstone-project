package com.deus.ehealthcare.dto;

import com.deus.ehealthcare.entity.Address;
import com.deus.ehealthcare.entity.User;
import com.deus.ehealthcare.entity.Order;
import com.deus.ehealthcare.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private User user;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;


}
