import mongoose, { mongo } from "mongoose";

const orderSchema = mongoose.Schema({
        userId : {type:String, required:true},
        products : [
            {
                productId : {type: String, required:true},
                quantity: {type:Number, default:1}
            }
        ],
        amount: {type:Number, required:true},
        address : {type:Object},
        status : {type:String, default:'pending'}
    
    }, 
    {timestamps: true},
)

export const Order = mongoose.model('Orders', orderSchema)