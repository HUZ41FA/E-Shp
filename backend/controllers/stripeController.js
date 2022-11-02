import Stripe from "stripe"
import { calculateTotalOrderAmount } from "../util/index.js"
import { Cart } from "../models/cart.js"
import dotenv from 'dotenv'

dotenv.config()

const stripe = Stripe(process.env.STRIPE_KEY)

export const chargeCutomer = async (req, res) => {
    const cart = await Cart.findOne({userId : req.params.userId})
    
    stripe.charges.create({
        source : req.body.tokenId,
        amount : req.body.amount, //Receiving amount from frontend is dangerous as the request can be intercepted and the amount can be altered in future we will be using calculateTotalOrderAmount(cart) function to calculate the price
        currency: "usd",
    }, (stripeError, stripeResponse)=>{
        if(stripeError){
            return res.status(500).json({success:false, message: "Error Processing the payment"})
        }else{
            return res.status(200).json({success:true, message:"Payment successful", data:stripeResponse})
        }
    })
}