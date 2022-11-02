import { User } from "../models/users.js"
import bcrypt from 'bcrypt'

export const updateUser = async (req, res)=>{
    try{
        const saltRounds = 10
        req.body.password = await bcrypt.hash(req.body.password, saltRounds)

        let updatedUser = await User.findByIdAndUpdate(req.params.userId,
            {$set : req.body}, {new:true})

        const {password, ...rest} = updatedUser

        return res.status(200).json(
            {
                success : true, 
                message : "user updated", 
                data : rest._doc
            }, )
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:"Error occured @ backend"})
    }
}

export const deleteUser = async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.userId)
        return res.status(200).json({success:true, message:`user with ${req.params.userId} deleted`})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}

export const getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        const {password, ...rest} = user

        return res.status(200).json({success:true, data:rest._doc})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}

export const getAllUsers = async (req, res) => {
    const query = req.query.new
    try{
        const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find()

        return res.status(200).json({success:true, data:users})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}

export const userStats = async (req,res) => {
    const date = new Date();
    const lastYearDate = new Date(date.setFullYear(date.getFullYear() - 1))
    try{
        const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYearDate } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
        return res.status(200).json({success:true, data:data})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:"Error occured @ backend"})
    }
}