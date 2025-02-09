const { default: mongoose } = require("mongoose");

const productScheme=new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:Array, required:true},
    category:{type:String, required:true},
})
const productModel = mongoose.model.product || mongoose.model("product",productScheme);

module.exports ={ productModel};