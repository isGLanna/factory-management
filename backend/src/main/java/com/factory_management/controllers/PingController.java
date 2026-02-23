package com.factory_management.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/ping")
public class PingController {

  @GetMapping
  public String ping() {
    return "ping";
  }
}
