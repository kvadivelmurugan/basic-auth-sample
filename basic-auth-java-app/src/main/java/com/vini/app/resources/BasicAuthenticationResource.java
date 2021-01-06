package com.vini.app.resources;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class BasicAuthenticationResource {

    @RequestMapping(method= RequestMethod.POST, value="baisc-auth")
    public ResponseEntity<NULL> doBasicAuthentication (String username, String password) {

    }

}
