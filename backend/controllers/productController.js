import { Product } from "../models/product.js";


export const createProduct = async (req, res) => {
    try{
        const newProduct = new Product({
            title : req.body.title,
            description : req.body.description,
            image : req.body.image,
            color: req.body.color,
            categories: req.body.categories,
            size: req.body.size,
            price : req.body.price
        })

        return res.status(201).json({success:true, message:"Product created", data:newProduct})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:'Error occured @ backend'})
    }
}

export const updateProduct = async (req, res)=>{
    try{
        const saltRounds = 10
        req.body.password = await bcrypt.hash(req.body.password, saltRounds)

        let updatedProduct = await Product.findByIdAndUpdate(req.params.productId,
            {$set : req.body}, {new:true})


        return res.status(200).json(
                {
                    success : true, 
                    message : "product updated", 
                    data : updatedProduct
                },
            )

    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:"Error occured @ backend"})
    }
}

export const deleteProduct = async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.productId)
        return res.status(200).json({success:true, message:`Product with id: ${req.params.userId} deleted`})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}

export const getProduct  = async (req, res) => {
    try{
        const product = await Product.findById(req.params.productId)
        

        return res.status(200).json({success:true, data:product})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}

export const getAllProducts = async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.categories
    let products = []

    try{
        if(qNew){
            products = await Product.find().sort({createdAt:-1}).limit(5)
        }else if(qCategory){
            products = await Product.find({
                categories : {
                    $in : [qCategory],
                }
            })
        }else{
            products = await Product.find()
        }

        return res.status(200).json({success:true, data:products})
        
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}