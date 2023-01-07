package com.deus.ehealthcare.service;

import com.deus.ehealthcare.entity.Transaction;

import java.util.List;


public interface TransactionService {
    Transaction saveTransaction(Transaction transaction);

    Long numberOfTransactions();

    List<Transaction> findAllTransactions();
}
