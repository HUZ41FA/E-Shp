import jwt from 'jsonwebtoken'


const verifyToken = async (req,res,next)=>{
    console.log("VERIFY TOKEN MIDDLEWARE FIRES 🔥")
    let accessToken = req.get('Authorization')
    if(accessToken){
        accessToken = accessToken.split(' ')[1]
        try{
            jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, decode)=>{
                if(err){
                    return res.status(401).json({success:false, message:err.message})
                }else{
                    res.locals.decoded = decode
                    return next()
                }
            })
            
        }catch(e){
            console.log(e)
            return res.status(500).json({success:false, message:"Error occured @ the backend"})
        }
    }else{
        return res.json({success:false, message:"No Token Provided"})
    }    
}


export default verifyToken