package com.vini.app.resources;

import com.vini.app.model.Contact;
import com.vini.app.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactResource {

    @Autowired
    ContactService contactService;

    @RequestMapping(method = RequestMethod.GET, path = "/contacts/{userId}", produces="application/json")
    @ResponseBody
    public List<Contact> getContacts(@PathVariable("userId") long userId) {
        return contactService.findAllByUserUserId(userId);
    }
}
