 const express =require("express")
const upload = require("../config/multer")
const {addProduct, listProduct,removeProduct,singleProduct } = require("../controllers/productController")

 const productRouter =express.Router();
 productRouter.post("/add", upload.single("image"), addProduct);
 productRouter.get('/list',listProduct);
 productRouter.get('/single',singleProduct);
 productRouter.post('/remove', removeProduct);
module.exports= productRouter