import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/authRoute.js'
import verifyToken from './customMiddleware/verifyToken.js'
import cartRouter from './routes/cartRoute.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import orderRouter from './routes/orderRoute.js'
import checkoutRouter from './routes/stripeRoute.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const API_VERSION = process.env.API_VERSION


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended : true}))

app.use(`/api/${API_VERSION}/checkout`, checkoutRouter)
app.use(`/api/${API_VERSION}/auth`,authRouter)

app.use(verifyToken)
app.use(`/api/${API_VERSION}/users`, userRouter)
app.use(`/api/${API_VERSION}/cart`,cartRouter)
app.use(`/api/${API_VERSION}/products`, productRouter)
app.use(`/api/${API_VERSION}/orders`, orderRouter)


mongoose.connect(process.env.MONGODB_ATLAS)
.then((msg)=>{
    console.log('Database Connected')
    app.listen(PORT, ()=>{console.log(`App started @ port ${PORT}`)})
})
.catch((msg)=>console.log(`Error occured while connecting to the DB => ${msg}`))
