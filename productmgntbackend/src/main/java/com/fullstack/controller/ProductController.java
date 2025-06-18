package com.fullstack.controller;

import com.fullstack.entity.Product;
import com.fullstack.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    private final ProductService productService;

    @PostMapping("/save")
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {

        log.info("@@@@@@@Trying to save data for Product: " + product.getProductName());
        return ResponseEntity.ok(productService.save(product));
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Product>> findAll() {
        return ResponseEntity.ok(productService.findAll());
    }
}
