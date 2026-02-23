package com.factory_management.services;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class AutoPing {
  private final RestTemplate restTemplate = new RestTemplate();

  @Scheduled(fixedRate = 1000 * 60 * 10)
  public void keepAlive() {
    String url = "http://localhost:8080/ping";
    try {
      String response = restTemplate.getForObject(url, String.class);
      System.out.println(response);
    } catch (Exception e) {
      System.err.println("Auto-ping: Server is not responding.");
    }
  }
}
