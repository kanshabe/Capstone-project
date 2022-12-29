package com.deus.ehealthcare.service;

import com.deus.ehealthcare.dto.Purchase;
import com.deus.ehealthcare.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
