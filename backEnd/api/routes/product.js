const router = require("express").Router();
const Product = require("../models/product");

router.get("/products", (req, res) => {
  const products = [
    {
      name: "Product 1",
      price: 10,
      description: "Description 1",
      imagePath: "test",
    },
    {
      name: "Product 2",
      price: 20,
      description: "Description 2",
      imagePath: "test",
    }
  ];

  Product.insertMany(products)
    .then((docs) => {
      res.status(200).json({ message: "Products inserted successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to insert products" });
    });
});

module.exports = router;
