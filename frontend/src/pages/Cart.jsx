import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import productImage1 from '../data/images/7.png'
import productImage2 from '../data/images/22.png'
import productImage3 from '../data/images/33.png'
import { mobile } from '../responsive'


const Wrapper = styled.div`
    padding : 20px;
`
const Title = styled.h1`
    font-weight : 300;
    text-align : center;
`
const Top = styled.div`
    display : flex;
    align-items : center; 
    justify-content : space-between;
    padding : 20px;
    ${mobile({display : "none"})}
`
const TopButton = styled.button`
    padding : 10px;
    font-weight : 800;
    background-color : ${props=>props.filled ? "black" : "white"};
    color : ${props=>props.filled ? "white" : "black"};
    border : ${props=>props.filled ? "none" : "visible"};
    border-radius : 5px;
`

const TopTexts = styled.div`
`
const TopText = styled.span`
    text-decoration : underline;
    cursor : pointer;
    font-weight : 600;
    margin : 0px 10px;
`


const Bottom = styled.div`
    display : flex;
    justify-content : space-between;
    ${mobile({"flex-direction" : "column"})}

`
const Info = styled.div`
    flex: 3;
    margin : 10px;
`


const Product = styled.div`
    display : flex;
    justify-content : space-between;
    ${mobile({"flex-direction" : "column", "flex-wrap" : "wrap"})}

`
const ProductDetails = styled.div`
    flex : 2;
    display : flex;
`
const Image = styled.img`
    width : 200px;
    ${mobile({width: "100px"})}
`
const Details = styled.div`
    display : flex;
    flex-direction : column;
    padding : 20px;
    justify-content : space-around;
    `
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.span`
    height : 20px;
    width : 20px;
    border-radius : 20px;
    background-color : ${props=>props.color};
    ${mobile({margin: "10px 0px"})}
`
const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex : 1;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
`

const ProductAmountContainer = styled.div``

const ProductAmount = styled.div``
const ProductPrice = styled.div`
    font-size : 24px;
`
const AmountContainer = styled.div`    
    display : flex;
    height : 70px;
    align-items : center;
`
const Add = styled.button`
    color : white;
    background-color : black;
    width : 40px;
    height : 30px;
    font-size :20px;
    margin : 5px;
    border-radius : 3px;
`
const Remove = styled.button`
    color : white;
    background-color : black;
    width : 40px;
    height : 30px;
    font-size :20px;
    margin : 5px;
    border-radius : 3px;

`


const Amount = styled.h1`
    padding : 0px 10px;
    border : 1px solid #2ebfba;
    border-radius : 5px;
    font-size : 24px;
`

const Hr = styled.hr`
    opacity : 0.6;
    background-color : gray;
    border : none;
    height : 1px;
`
const Summary = styled.div`
    flex :1;
    padding : 20px;
    border : 1px solid gray;
    border-radius : 10px;
    height : 50vh;
    overflow: auto;
    box-shadow : 10px 10px 10px gray;
`
const SummaryTitle = styled.h1`
    font-weight : 300;
    ${mobile({"font-size":"24px"})}

`
const SummaryItem = styled.div`
margin : 25px 0px;
display : flex;
justify-content : space-between;
align-items : center;
`
const SummaryItemTitle = styled.span`
    font-weight : ${props=>props.type === 'total' ? 800 : 300};
    font-size : ${props=>props.type === 'total' ? "30px" : "20px"};
    ${mobile({
        "font-size": `${props=>props.type === 'total' ? "18px" : "14px"};`,
    })}


`
const SummaryItemPrice = styled.span`
font-weight : ${props=>props.type === 'total' ? 800 : 300};
    font-size : ${props=>props.type === 'total' ? "30px" : "20px"};
    ${mobile({
        "font-size": `${props=>props.type === 'total' ? "18px" : "14px"};`,
    })}
`
const ButtonContainer = styled.div`
    display : flex;
    justify-content : center;
`
const Button = styled.button`
    padding : 10px;
    background-color : teal;
    font-size : 18px;
    color : white;
    cursor : pointer;
    border-radius : 10px;
    border : none;
    width : 100%;
`

const Cart = () => {

    const [amount, setAmount] = React.useState(1)
    const [price, setPrice] = React.useState(120)

    const handleAmountChange = (type) => {
        if(type === 'increment'){
            return setAmount(prev=>{
                let newAmount = prev+1
                setPrice(newAmount*120)
                return newAmount
            })

        }else if(type === 'decrement'){
            return setAmount(prev=>{
                if(prev > 0){
                    let newAmount = prev-1 
                    setPrice(newAmount*120)
                    return newAmount
                }else{
                    return 0
                }
 
            })
        }
    }

  return (
    <>
        <Navbar/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>
                        Your Cart (3)
                    </TopText>
                    <TopText>
                        Your Wishlist (2)
                    </TopText>
                </TopTexts>
                <TopButton filled={true}>Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                            <Image src = {productImage1} />
                            <Details>
                                <ProductName><b>Products: </b>Nike Air Max</    ProductName>
                                <ProductId><b>ID: </b>29009428ZX</ProductId>
                                <ProductColor color="purple" />
                                <ProductSize><b>Size: </b> 10.5 US</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AmountContainer >
                                    <Remove onClick={()=>handleAmountChange("decrement")}>
                                    -
                                    </Remove>
                                    <Amount>{amount}</Amount>
                                    <Add onClick={()=>handleAmountChange("increment")}>
                                +
                                    </Add>
                                </AmountContainer>
                            </ProductAmountContainer>
                            <ProductPrice>$ {price}</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                            <Image src = {productImage2} />
                            <Details>
                                <ProductName><b>Products: </b>Nike Air Max</    ProductName>
                                <ProductId><b>ID: </b>29009428ZX</ProductId>
                                <ProductColor color="gold" />
                                <ProductSize><b>Size: </b> 10.5 US</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AmountContainer >
                                    <Remove onClick={()=>handleAmountChange("decrement")}>
                                    -
                                    </Remove>
                                    <Amount>{amount}</Amount>
                                    <Add onClick={()=>handleAmountChange("increment")}>
                                +
                                    </Add>
                                </AmountContainer>
                            </ProductAmountContainer>
                            <ProductPrice>$ {price}</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                            <Image src = {productImage3} />
                            <Details>
                                <ProductName><b>Products: </b>Nike Air Max</    ProductName>
                                <ProductId><b>ID: </b>29009428ZX</ProductId>
                                <ProductColor color="green" />
                                <ProductSize><b>Size: </b> 10.5 US</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AmountContainer >
                                    <Remove onClick={()=>handleAmountChange("decrement")}>
                                    -
                                    </Remove>
                                    <Amount>{amount}</Amount>
                                    <Add onClick={()=>handleAmountChange("increment")}>
                                +
                                    </Add>
                                </AmountContainer>
                            </ProductAmountContainer>
                            <ProductPrice>$ {price}</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemTitle>
                            SubTotal
                        </SummaryItemTitle>
                        <SummaryItemPrice>
                            $ {price * 3}
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemTitle>
                            Estimated Shipping
                        </SummaryItemTitle>
                        <SummaryItemPrice>
                            $ 29.27
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemTitle>
                            Shiping Discount
                        </SummaryItemTitle>
                        <SummaryItemPrice>
                            $ 9.00
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemTitle type="total">
                            Total
                        </SummaryItemTitle>
                        <SummaryItemPrice type="total">
                            $ {price * 3 + 20}
                        </SummaryItemPrice>
                    </SummaryItem>
                    <ButtonContainer>
                        <Button>Checkout</Button>
                    </ButtonContainer>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </>
  )
}

export default Cart