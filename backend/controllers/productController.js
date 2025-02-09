const express = require("express");
const { listProduct } = require("../controllers/productController"); 

console.log("listProduct:", listProduct); 

const productRouter = express.Router();

productRouter.get("/list", listProduct); 

module.exports = productRouter;
