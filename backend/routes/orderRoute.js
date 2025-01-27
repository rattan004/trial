import express from 'express'
import { allOrders,userOrders,placeOrder,placeOrderRazorpay,placeOrderStripe,updateStatus, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()
//Admin
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//User
orderRouter.post('/userorders',authUser,userOrders)

orderRouter.post('/verifystripe',authUser,verifyStripe)

export default orderRouter