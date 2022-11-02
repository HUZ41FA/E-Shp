import React from 'react'
import styled from 'styled-components'
import { categories } from '../data/data'
import { mobile } from '../responsive'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display : flex; 
    justify-content : center;
    padding : 0px;
    position : relative;
    flex-direction : column;
    margin-bottom : 0;
`
const Heading = styled.div`
  display : flex;
  justify-content : space-between;
  margin-top : 50px;
  margin-bottom : 20px;
  margin-left: 10px;
  margin-right: 10px;
  align-items : center;
`
const MainHeading = styled.h1`
  margin : 20px;
`

const Divider = styled.div`
  height : 2px;
  width : 60%;
  background-color : black;
`

const ImageContainer = styled.div`
  display : flex;
  ${mobile({"flex-direction": "column"})}

`

const Categories = () => {
  return (
    <Container>
      
      <Heading>
        <Divider/>
          <MainHeading> Categories </MainHeading>
        <Divider/>
      </Heading>
      <ImageContainer>
        {categories.map((category)=>{
            return (
                <CategoryItem key={category.key} item={category} />
            )
        })}
      </ImageContainer>
    </Container>
  )
}

export default Categories