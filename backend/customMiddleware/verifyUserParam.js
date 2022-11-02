const verifyUserParam = async (req, res, next)=>{
    try{
        console.log("VERIFY USER PARAMS MIDDLEWARE FIRES 🔥🔥")
        if(req.params.userId === res.locals.decoded.user._id || res.locals.decoded.user.isAdmin ){
            return next()
        }else{
            return res.status(403).json({success:false,message:"UnAuthorized"})
        }
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false, message:"Error occured @ backend"})
    }
}

export default verifyUserParam