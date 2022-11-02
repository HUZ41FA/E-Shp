import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import { User } from "../models/users.js";
import bcrypt from 'bcrypt';

export const createUser = async (req,res) => {
    const saltRounds = 10

    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        
    })

    try{
        newUser.password  = await bcrypt.hash(req.body.password, saltRounds)
        const savedUser = await newUser.save()
        console.log(savedUser)
        return res.json({success:true, message: 'User Created', data:savedUser})
    }catch(e){
        console.log(e)
        return res.status((500)).json({success:false, message:'Error occured @ backend'})
    }
    
}


export const loginUser = async (req,res) => {
    const username = req.body.username
    const password =  req.body.password 

    try{
        const user = await User.findOne({username: username})
        
        if(!user) {
            console.log("USER DOES NOT EXISTS")
            return res.status(401).json({success:false, message:"Invalid Credentials"})
         }

        const result = await bcrypt.compare(password, user.password)
        if(!result) {
            return res.status(401).json({success:false, message:'Invalid Credentials'})
        }
        
       const {originalPassword, ...rest} = user
       const accessToken  = jwt.sign({user : rest._doc,}, process.env.JWT_SECRET_KEY, {expiresIn:'3d'}) 
       
        return res.status(200).json({success:true, data:{...rest._doc, accessToken:accessToken, }})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:'Error occured @ backend'})
    }
}
