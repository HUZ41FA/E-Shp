import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';


const Container = styled.div`
    flex : 1;
    margin : 10px;
`
const Image = styled.img`
    width: 100%;
    height : 100%;
    border-radius : 15px;
    object-fit : cover;
    ${mobile({
      "height" : "30vh",
      })}
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width : 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
 


const Title = styled.h1`
`

const Button = styled.button`
    border : none;
    width : 100px;
    height : 45px;
    font-size : 15px;
    margin : -72px;
    color : white;
    background-color: teal;
    border-radius : 5px;
    cursor : pointer;
    opacity : 0;
    transition : all 0.25s ease;

    &:hover {
      opacity : 1;
      transform: translateY(70px) scale(1.1);
    }
    ${mobile({
      "opacity" : 1,
      "transform": "translateY(70px) scale(1.1)"})}
    `

const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Image src={item.image} />
        <Info>
            <Title >{item.title.toUpperCase()}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem