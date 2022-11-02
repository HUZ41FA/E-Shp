import { Cart } from "../models/cart.js";


export const createCart = async (req, res) => {
    try{
        const newCart = new Cart(req.body)

        return res.status(201).json({success:true, message:"Cart created", data:newCart})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:'Error occured @ backend'})
    }
}

export const updateCart = async (req, res)=>{
    try{

        let updatedCart = await Cart.findByIdAndUpdate(req.params.userId,
            {$set : req.body}, {new:true})


        return res.status(200).json(
                {
                    success : true, 
                    message : "cart updated", 
                    data : updatedCart
                },
            )

    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:"Error occured @ backend"})
    }
}

export const deleteCart = async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.userId)
        return res.status(200).json({success:true, message:`Cart with id: ${req.params.userId} deleted`})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}

export const getCart  = async (req, res) => {
    try{
        const cart = await Cart.findOne({userId : req.params.userId})
        return res.status(200).json({success : true, data : cart })
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}

export const getAllCarts = async (req, res) => {
    try{
        const carts = await Cart.find()
        return res.status(200).json({success:true, data:carts})
    }catch(e){
        console.log(e)
        res.status(500).json({success:false, message:"Error occured @ backend"})
    }
}