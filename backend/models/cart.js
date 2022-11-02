import mongoose, { mongo } from "mongoose";

const cartSchema = mongoose.Schema({
        userId : {type:String, required:true},
        products : [
            {
                productId : {type: String, required:true},
                quantity: {type:Number, default:1}
            }
        ]
    }, 
    {timestamps: true},
)

export const Cart = mongoose.model('Carts', cartSchema)

