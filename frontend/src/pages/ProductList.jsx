import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div`
`
const FilterContainer = styled.div`
    display : flex;
    justify-content : space-between;
`
const Filter = styled.div`
    margin: 20px;
    display : flex;
    ${mobile({"flex-direction" : "column", "width" : "0px 20px"})}
    `
const FilterTitle = styled.div`
    font-size : 20px;
    font-weight : 600;
`

const FilterSelect = styled.select`
    padding : 8px;
    margin-left : 15px;
    margin-right : 10px;
    ${mobile({margin : "10px 0px"})}

`

const FilterOption = styled.option`
    padding : 8px;

`

const Title = styled.h1`
    margin: 20px;
`

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterTitle>
                    Filter Items: 
                </FilterTitle>
                <FilterSelect >
                    <FilterOption disabled selected>
                        COLOR
                    </FilterOption>
                    <FilterOption>
                        Red
                    </FilterOption>
                    <FilterOption>
                        Blue
                    </FilterOption>
                    <FilterOption>
                        Green
                    </FilterOption>
                    <FilterOption>
                        Pink
                    </FilterOption>
                    <FilterOption>
                        Gray
                    </FilterOption>
                </FilterSelect>
                <FilterSelect >
                    <FilterOption disabled selected>
                        Size
                    </FilterOption>
                    <FilterOption>
                        Small
                    </FilterOption>
                    <FilterOption>
                        Medium
                    </FilterOption>
                    <FilterOption>
                        Large
                    </FilterOption>
                    <FilterOption>
                        Extra Large
                    </FilterOption>
                    
                </FilterSelect>
            </Filter>
            <Filter>
                <FilterTitle>
                    Sort Item:
                </FilterTitle>
                <FilterSelect >
                    <FilterOption>
                        Newest
                    </FilterOption>
                    <FilterOption>
                        Price (asc)
                    </FilterOption>
                    <FilterOption>
                        Price (desc)
                    </FilterOption>
                    <FilterOption>
                        Extra Large
                    </FilterOption>
                    
                </FilterSelect>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>

    </Container>
  )
}

export default ProductList