package com.vini.app.repositories;

import com.vini.app.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends JpaRepository <Contact, Long> {
    List<Contact> findAllByUserId (String userId);
}
