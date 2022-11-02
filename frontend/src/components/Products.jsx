import React from 'react'
import styled from 'styled-components'
import { products } from '../data/data'
import Product from './Product'

const Container = styled.div`
    padding : 10px;
    display : flex;
    flex-wrap : wrap;
    flex-direction : column;
    position : relative;
    
    
`
const Heading = styled.div`
  display : flex;
  justify-content : center;
  margin-top : 50px;
  margin-bottom : 20px;
  margin-left: 10px;
  margin-right: 10px;
  align-items : center;
`
const MainHeading = styled.h1`
  margin : 20px;
  color: black;
`

const Divider = styled.div`
  height : 2px;
  width : 35%;
  background-color : black;
`
const ImagesContainer = styled.div` 
  display : flex;
  flex-wrap : wrap;
  justify-content : center;
  

`

const SVG = styled.div`
  position : absolute;
  bottom: -3px;
  left : 0;
  width : 100%;
  z-index : -3;

  
`

const Products = ({ mainHeading }) => {
  return (
    <Container>
      
      <Heading>
        { mainHeading && <><Divider/>
          <MainHeading>Popular Products</MainHeading>
        <Divider/></>}
      </Heading>
      <ImagesContainer>
        {products.map((product)=>{
            return (
                <Product product={product}/>
                )
        })}
      </ImagesContainer>
    </Container>
  )
}

export default Products