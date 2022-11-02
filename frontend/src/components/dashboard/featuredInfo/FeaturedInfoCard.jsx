import React from 'react'
import styled from 'styled-components'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Container = styled.div`
    flex : 1;
    background-color: #f3f0fc;
    box-shadow : 5px 5px 10px gray;
    cursor : pointer;
    padding : 30px;
    margin : 10px;
    border-radius : 15px;
`
const FeaturedTitle = styled.span`
    font-size : 24px;
    font-weight : 400;
`
const FeaturedMoneyContainer = styled.div`
    display : flex;
    margin : 10px 0px;
    align-items : center;
    font-size : 14px;

`
const FeaturedMoney = styled.span`
    font-size : 30px;
    font-weight : 400px;
    font-weight : 600;


`
const FeaturedIcon = styled.span`
    display : flex;
    align-items :center;
    margin-left : 10px;
`
const FeaturedSub = styled.span`
    font-size : 15px;
    color : gray;
`

const FeaturedInfoCard = (props) => {
    console.log(props)
  return (
    <Container>
      <FeaturedTitle>{props.data.title}</FeaturedTitle>
      <FeaturedMoneyContainer>
        <FeaturedMoney>$ {props.data.amount}</FeaturedMoney>
        <FeaturedIcon>11.2{props.data.rate ? <ArrowUpwardIcon color='success'/> : <ArrowDownwardIcon color='error'/>}</FeaturedIcon>
      </FeaturedMoneyContainer>
      <FeaturedSub>Compared To last month</FeaturedSub>
    </Container>
  )
}

export default FeaturedInfoCard