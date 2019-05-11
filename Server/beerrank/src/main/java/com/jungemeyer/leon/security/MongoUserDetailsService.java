package com.jungemeyer.leon.security;

import com.jungemeyer.leon.database.MongoDB;
import com.jungemeyer.leon.database.UserRepository;
import com.jungemeyer.leon.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class MongoUserDetailsService implements UserDetailsService {

    //TODO: Remove if unnecessary
    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = MongoDB.loadUserByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("User " + username + " does not exist");
        }

        List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("user"));

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }
}
