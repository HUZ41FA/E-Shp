import mongoose from "mongoose";

const productSchema = mongoose.Schema({
        title : {type:String, required:true},
        description : {type:String, required:true},
        image : {type:String,},
        color: {type:String, required:true},
        categories: {type:Array},
        size: {type:String, required:true},
        price : {type:Number, require:true}
    }, 
    {timestamps: true},
)

export const Product = mongoose.model('Products', productSchema)