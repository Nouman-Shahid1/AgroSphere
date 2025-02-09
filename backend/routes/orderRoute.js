const express = require("express")
const {placeOrder,allOrders,userOrders,updateOrderStatus} = require("../models/orderModel")

const  orderRouter= express.Router()

orderRouter.post('/list',allOrders)
orderRouter.post('/status',updateOrderStatus)
orderRouter.post('/place',placeOrder)
orderRouter.post('/userorders',userOrders)

module.export = orderRouter;