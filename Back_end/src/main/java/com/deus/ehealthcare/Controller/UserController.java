package com.deus.ehealthcare.Controller;

import com.deus.ehealthcare.entity.Role;
import com.deus.ehealthcare.entity.User;
import com.deus.ehealthcare.jwt.JwtTokenProvider;
import com.deus.ehealthcare.service.ProductService;
import com.deus.ehealthcare.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private ProductService productService;

      @PostMapping("/api/user/registration")
    public ResponseEntity<?> register(@RequestBody User user){
        if(userService.findByUsername(user.getUsername())!=null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        //default role.
        user.setRole(Role.USER);
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/api/user/login")
    public ResponseEntity<?> getUser(Principal principal){
        if(principal == null){

            return ResponseEntity.ok(principal);
        }
        UsernamePasswordAuthenticationToken authenticationToken =
                (UsernamePasswordAuthenticationToken) principal;
        User user = userService.findByUsername(authenticationToken.getName());
        user.setToken(tokenProvider.generateToken(authenticationToken));

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/api/user/products")
    public ResponseEntity<?> getAllProducts(){
        return new ResponseEntity<>(productService.findAllProducts(), HttpStatus.OK);
    }

}
