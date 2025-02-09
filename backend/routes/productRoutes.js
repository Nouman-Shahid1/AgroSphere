 const express =require("express")
const listProduct= require("../controllers/productController")

 const productRouter =express.Router();
 productRouter.get('/list',listProduct);
 
module.exports= productRouter