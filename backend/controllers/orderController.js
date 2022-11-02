import { Order } from "../models/order.js";


export const createOrder = async (req, res) => {
    try{
        const newOrder = new Order(req.body)

        return res.status(201).json({success:true, message:"Order created", data:newOrder})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:'Error occured @ backend'})
    }
}

export const updateOrder = async (req, res)=>{
    try{

        let updatedOrder = await Order.findByIdAndUpdate(req.params.orderId,
            {$set : req.body}, {new:true})


        return res.status(200).json(
                {
                    success : true, 
                    message : "order updated", 
                    data : updatedOrder
                },
            )

    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:"Error occured @ backend"})
    }
}

export const deleteOrder = async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.orderId)
        return res.status(200).json({success:true, message:`Order with id: ${req.params.userId} deleted`})
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}

export const getOrder  = async (req, res) => {
    try{
        const order = await Order.find({userId : req.params.orderId})
        return res.status(200).json({success : true, data : order })
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:'Error occured @ backend'})
    }
}

export const getAllOrders = async (req, res) => {
    try{
        const orders = await Order.find()
        return res.status(200).json({success:true, data:orders})
    }catch(e){
        console.log(e)
        res.status(500).json({success:false, message:"Error occured @ backend"})
    }
}

export const getMonthlyIncome =  async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
}