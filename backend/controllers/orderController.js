const orderModel = require("../models/orderModel.js")
const userModel = require("../models/User.js")
const placeOrder = async(req,res)=>{
try {
    const {userId,items,amount,address}=req.body;
    const orderData={
        userId,
        items,
        address,
        amount,
        paymentMethod:"COD",
        payment:false,
        date:Date.now()
    }
    const newOrder =new orderModel(orderData)
    newOrder.save();

    await userModel.findByIdAndUpdate(userId,{cartData:{}})
    res.json({success:true,message:'Order Placed'})

    
} catch (error) {
    res.json({success:false,message:error.message})

}
}



//all orders for admin panle
const allOrders= async(req,res)=>{
    try {
        const order =await orderModel.find({})
        res.json({success:true,order})
        
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}
// user order data for front end
const userOrders = async(req,res)=>{
    try {
        const {userId}=req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// update Order Status
const updateOrderStatus=async(req,res)=>{
try {
    const {orderId,status}= req.body
    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true,message:'status Updated'})
    
} catch (error) {
    res.json({success:false,message:error.message})
}
}
module.exports= {placeOrder,allOrders,userOrders,updateOrderStatus}