import React from 'react'
import './pay.css'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import logo from './shop.png'

const STRIPE_PUBLIC_KEY = "pk_test_51Lg625CNSMolw12lnVSIa3ZvEkuiw3DwpKFeJIoRtdGvCdVb4zCNT7Db3JT2e8COYxheb361KpeKhaMUKs6qx1zE00DDcSZhwz"

const IMG = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fef%2F3a%2F76%2Fef3a766176ca373cdf0f2555f0642c53.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F814940495060888534%2F&tbnid=wB5fjW-anLhtsM&vet=12ahUKEwj3orD1mpL6AhVL3IUKHaWrAdsQMygNegUIARCLAg..i&docid=ArP6o2pJBU2WFM&w=800&h=600&q=E%20logo&ved=2ahUKEwj3orD1mpL6AhVL3IUKHaWrAdsQMygNegUIARCLAg"


const Pay = () => {
  const [stripeToken, setStripeToken] = React.useState(null)
  const navigate = useNavigate()

  React.useEffect(()=>{
    const makeRequest = async () => {
      try{
          const res = await axios.post('http://localhost:5000/api/v1/checkout/pay',
          {
          amount : 2000,
          tokenId : stripeToken.id
          }
        )
        console.log("MAKE REQ RAN")
        console.log(res.data)
        console.log("-------------")
      }catch(e){
        console.log(e)
      }
    };
    console.log("USE EFFECT RAN")
    stripeToken && makeRequest();
    console.log("------------------------")
  }, [stripeToken])

  const onToken = (token)=>{
    console.log(token)
    setStripeToken(token)
  }
  return (
    <>
    <StripeCheckout 
      name='E-shp'
      image={logo}
      billingAddress
      shippingAddress
      description='Your total is $20'
      amount={2000}
      token={onToken}
      stripeKey={STRIPE_PUBLIC_KEY}
    >
    <button onClick={()=>console.log("ABC123")}>Button</button>
    </StripeCheckout>
    <h1>Test Text</h1>
    </>
  )
}

export default Pay