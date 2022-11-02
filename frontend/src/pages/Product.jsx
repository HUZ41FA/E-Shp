import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import productImg from '../data/images/7.png'
import { mobile } from '../responsive'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    display : flex;
    margin-bottom : 10px;
    ${mobile({"flex-direction" : "column"})}
`
const ImgContainer = styled.div`
    flex : 1;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
    padding : 0px 50px;
    ${mobile({background : "white"})}

`
const Image = styled.img`
    width : 100%;
`
const InfoContainer = styled.div`
    flex : 1;
    padding : 0px 50px;
    display : flex;
    align-items : center;
    ${mobile({"justify-content" : "center"})}
    `
const InfoWrapper = styled.div`
    flex : 1;
    ${mobile({"display" :"flex",
        "align-items": "center",
        "flex-direction":"column"})}
`

const Title = styled.h1`
    font-weight : 200;
    font-size : 60px;
    ${mobile({"font-size" : "40px", "text-align" : "center"})}
`
const Description = styled.h2`
    margin : 20px 0px;
    font-weight : 200;
    ${mobile({"font-size" : "20px", "text-align" : "center"})}

`
const Price = styled.h3`
font-weight : 200;
font-size : 40px;
${mobile({"text-align" : "center"})}

`
const FilterContainer = styled.div`
    display : flex;
    align-items : center;
`

const Filter = styled.div`
    display : flex;
    align-items : center;
    ${mobile({margin : "20px 0px"})}
`

const FilterTitle = styled.div`
    font-size : 20px;
    font-weight : 600;
    margin-left : 10px;

`

const FilterSelect = styled.select`
    padding : 8px;
    margin-left : 15px;
    margin-right : 10px
`
const FilterColorContainer = styled.div`
    display : flex;

`

const FilterOption = styled.option`
    padding : 8px;

`
const FilterColor = styled.div`
    background-color : ${props=>props.color};
    height : 30px;
    width : 30px;
    border-radius : 50%;
    margin-left : 5px;
`

const AddContainer = styled.div`
    width: 50%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin-top : 50px;
    ${mobile({
        "flex-direction" : "column", 
        })}
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
`
const AddToCart = styled.button`
    padding : 10px;
    border : 2px solid teal;
    border-radius : 3px;
    cursor : pointer;
    &:hover {
        background-color : teal;
        color: white;
    }
`

const Product = () => {
    const [amount, setAmount] = React.useState(1)

    const handleAmountChange = (type) => {
        if(type === 'increment'){
            return setAmount(prev=>prev+1)
        }else if(type === 'decrement'){
            return setAmount(prev=>{
                if(prev > 0){
                    return prev-1 
                }else{
                    return 0
                }
            })
        }
    }

  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src={productImg}/>
            </ImgContainer>
            <InfoContainer>
            <InfoWrapper>

                <Title>
                    Nike Air Max
                </Title>
                <Description>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti. Incidunt repellendus nobis modi a, quas dolor deserunt iure minima id quisquam? Ex cum distinctio id excepturi, debitis corrupti fugit.
                </Description>
                <Price>$ 120</Price>
                <FilterContainer>
                <FilterTitle>
                    Color: 
                </FilterTitle>
                <FilterColorContainer >
                    <FilterColor color='#6c05a3' />
                    <FilterColor color='#035c15' />
                    <FilterColor color='#858483' />
                </FilterColorContainer>
                <Filter>
                <FilterTitle>
                    Size:
                </FilterTitle>
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
                
        </FilterContainer>
                <AddContainer>
                    <AmountContainer >
                        <Remove onClick={()=>handleAmountChange("decrement")}>
                            -
                        </Remove>
                            <Amount>{amount}</Amount>
                        <Add onClick={()=>handleAmountChange("increment")}>
                            +
                        </Add>
                    </AmountContainer>
                    <AddToCart>Add to Cart</AddToCart>
                </AddContainer>
                </InfoWrapper>

            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product