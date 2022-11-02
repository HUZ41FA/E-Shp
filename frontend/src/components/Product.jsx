import { ListItem } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
border-radius : 15px;

    background-color :#dfecf7;
    flex : 1;
    margin : 5px;
    min-width : 280px;
    max-width : 300px;
    height : 350px;
    position : relative;
    display : flex;
    justify-content : center;
    
`

const Info = styled.div`
    height : 100%;
    width : 100%;
    opacity : 0;
    position : absolute;
    top : 0;
    left : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    z-index : 3;
    transition : all 0.5s ease;
    border-radius : 15px;

    &:hover {
        opacity : 2;
        background-color : rgba(0,0,0,0.2);
    }
    
    
`

const Icon = styled.div`
    background-color : white;
    width : 40px;
    height : 40px;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 10px;
    cursor: pointer;
    transition : all 0.25s ease;
    
    &:hover {
        background-color : #c5fcfc;
        transform : scale(1.2);
    }
    
`




const Image = styled.img`
    height : 100%;
    width : 100%;
    object-fit : cover;
    border-radius : 15px;
`

const Circle = styled.div`
    height : 200px;
    width : 200px;
    border-radius : 50%;
    background-color : red;
    position : absolute;
    top : 0;
    left : 0;
    z-index : 0;
`


const Product = ({ product }) => {
  return (
    <Container>
        
        <Image src={product.image} backgroundImage={<Circle/>} />
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product