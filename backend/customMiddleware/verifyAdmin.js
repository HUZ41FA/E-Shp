const verifyAdmin = async (req, res, next)=>{
    try{
        console.log("VERIFY ADMIN MIDDLEWARE FIRES 🔥🔥")
        if(res.locals.decoded.user.isAdmin){
            return next()
        }else{
            return res.status(403).json({success:false,message:"UnAuthorized"})
        }
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:"Error occured @ backend"})
    }
}

export default verifyAdmin