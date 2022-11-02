import React from 'react'
import styled from 'styled-components'
import FeaturedInfoCard from './FeaturedInfoCard'

const Container = styled.div`
  display : flex;
  margin : 10px;
  justify-content: space-between;
  flex-wrap : wrap;
  align-items : center;
`



const FeaturedInfo = () => {
  const data = [
    {
      title : "Revenue",
      amount : "2,000",
      rate : true,
    },
    {
      title : "Sales",
      amount : "2,413,12",
      rate : false,
    },
    {
      title : "Cost",
      amount : "15,000",
      rate : false,
    }
  ]
  return (
    <Container>
      {
        data.map((data)=>{
          return <FeaturedInfoCard data={data}/>
        })
      }
      
    </Container>
  )
}

export default FeaturedInfo