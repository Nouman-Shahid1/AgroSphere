const productModel = require("../models/product");

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const imageFile = req.file;

        if (!imageFile) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        // Generate Image URL
        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${imageFile.filename}`;

        // Save product to DB
        const newProduct = new productModel({
            name,
            description,
            price,
            category,
            image: imageUrl,
        });

        await newProduct.save();
        res.status(201).json({ success: true, message: "Product created", product: newProduct });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};


const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
const singleProduct = async (req,res)=>{
    try{
    const product = await productModel.findById(req.body);
    res.json({success:true, product});
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}
const removeProduct = async (req,res)=>{
    try{
    await productModel.findByIdAndDelete(req.body.id);
    res.json({success:true, message:"product Deleted"});
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

module.exports = {addProduct, listProduct,removeProduct,singleProduct }; 
