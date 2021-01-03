package com.vini.app.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class WebSecurityConfigurer extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure (AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user1")
                .password("password")
                .roles("EVENTS_ROLE")
                .and()
                .withUser("user2")
                .password("password")
                .roles("CONTACTS_ROLE")
                .and()
                .withUser("user3")
                .password("password")
                .roles("NOTES_ROLE")
                .and()
                .withUser("user4")
                .password("password")
                .roles("EXPENSES_ROLE");
    }

    protected void configure (HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/events/**").hasRole("EVENTS_ROLE")
                .antMatchers("/expenses/**").hasRole("EXPENSES_ROLE")
                .antMatchers("/notes/**").hasRole("NOTES_ROLE")
                .antMatchers("/contacts/**").hasRole("CONTACTS_ROLE")
                .antMatchers("/").permitAll()
                .and().formLogin();
    }

    @Bean
    protected PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
