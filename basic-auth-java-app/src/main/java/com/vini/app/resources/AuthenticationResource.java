package com.vini.app.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationResource {
	
	@RequestMapping(method = RequestMethod.POST, path = "/auth/basic")
	@CrossOrigin (origins = "http://localhost:3000")
	public ResponseEntity<?> doBasicAuth () {
		return ResponseEntity.ok(null);
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/auth/token")
	public ResponseEntity<?> doTokenAuth (String username, String password) {
		return ResponseEntity.ok(null);
		
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/auth")
	public ResponseEntity<?> doAuth (String username, String password) {
		return ResponseEntity.ok(null);
		
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/oauth")
	public ResponseEntity<?> doOAuth (String username, String password) {
		return ResponseEntity.ok(null);
		
	}
}
