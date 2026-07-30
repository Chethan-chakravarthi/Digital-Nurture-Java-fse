package com.example.fsd.algorithms;

/**
 * Exercise 2: E-commerce Platform Search Function
 *
 * Implements a basic search function for an e-commerce platform.
 */
public class EcommerceSearch {

    /**
     * Represents a product with an ID, name, and category.
     */
    static class Product {
        private String productId;
        private String productName;
        private String category;

        public Product(String productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public String getProductId() {
            return productId;
        }

        public String getProductName() {
            return productName;
        }

        public String getCategory() {
            return category;
        }

        @Override
        public String toString() {
            return "Product(ID: " + productId + ", Name: " + productName + ", Category: " + category + ")";
        }
    }

    /**
     * A simple linear search to find a product by its name.
     *
     * @param products    The array of products to search through.
     * @param productName The name of the product to find.
     * @return The found Product, or null if not found.
     */
    public static Product linearSearch(Product[] products, String productName) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(productName)) {
                return product; // Found the product
            }
        }
        return null; // Product not found
    }

    public static void main(String[] args) {
        // Sample products
        Product[] products = {
            new Product("P001", "Laptop", "Electronics"),
            new Product("P002", "Smartphone", "Electronics"),
            new Product("P003", "Book", "Books"),
            new Product("P004", "Shoes", "Apparel")
        };

        // --- Test Linear Search ---
        System.out.println("--- Linear Search ---");
        String searchName = "Book";
        Product foundProduct = linearSearch(products, searchName);

        if (foundProduct != null) {
            System.out.println("Found product: " + foundProduct);
        } else {
            System.out.println("Product '" + searchName + "' not found.");
        }

        // Test case for a product that doesn't exist
        searchName = "Tablet";
        foundProduct = linearSearch(products, searchName);

        if (foundProduct != null) {
            System.out.println("Found product: " + foundProduct);
        } else {
            System.out.println("Product '" + searchName + "' not found.");
        }
    }
}
