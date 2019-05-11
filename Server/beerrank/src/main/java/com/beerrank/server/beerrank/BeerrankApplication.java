package com.beerrank.server.beerrank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class BeerrankApplication {
	@GetMapping("/")
	String home() {
		return "Server is running!";
	}


	public static void main(String[] args) {
		SpringApplication.run(BeerrankApplication.class, args);
	}

}
