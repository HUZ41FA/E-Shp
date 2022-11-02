import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color : red;
    color : white;
    height: 15px;
    display : flex;
    justify-content : center;
    align-items : center;
    font-weight : 800;
    padding : 5px;
    font-size : 14px;
`


const Announcement = () => {
  return (
    <Container>
        Super Deal! Order 1 Zinger burger for the price of two and GET ONE ZINGER BURGER FOR FREE!!!
    </Container>
  )
}

export default Announcement