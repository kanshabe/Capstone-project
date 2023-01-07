package com.deus.ehealthcare.dao;

import com.deus.ehealthcare.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository  extends JpaRepository<Transaction, Long> {

}
