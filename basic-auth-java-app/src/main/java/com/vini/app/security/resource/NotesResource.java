package com.vini.app.security.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotesResource {
    @RequestMapping(method = RequestMethod.GET, path = "/notes")
    public String getNotes() {
        return ("<h1>Welcome to Notes</h1>");
    }
}
