package com.example.demo.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
@RequiredArgsConstructor
public class RestClientConfig {

    private final TmdbProperties tmdbProperties;

    @Bean
    public RestClient restClient() {

        return RestClient.builder()

                .baseUrl(
                        tmdbProperties.getBaseUrl()
                )

                .build();
    }
}