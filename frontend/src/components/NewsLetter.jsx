import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';


const Container = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  background-color : #dcf7c3;
  height : 30vh;
  flex-direction : column;
  margin-top : 0; 
  position : relative;
`

const MainContainer = styled.div`
`

const Title = styled.h1`
  color : black;
  font-size : 70px;
  margin : 30px;
  margin-top : 60px;
  ${mobile({
    'margin' : "10px",
    'text-align' : "center", 
    "font-size" : "24px"})}

`
const Description = styled.p`
  color : black;
  font-size : 30px;
  ${mobile({'text-align' : "center", "font-size" : "18px"})}
`
const Email = styled.input`
  height : 100%;
  width : 100%;
  font-size : 20px;
  padding-left : 10px;
  padding-right : 10px;
  flex: 9;
  border-color: white;
  border-radius : 0;  
  

`
const Button = styled.button`
    border : none;
    height : 115%;
    flex:1;
    font-size : 60%;
    color : white;
    background-color: black;
    cursor : pointer;
    
    `
const Input = styled.div`
  height: 50px;
  width : 90%;
  display : flex;
  justify-content : center;
  align-items : center;  
  ${mobile({
    "height" : "20px"})}
  `
  const SVGTop = styled.div`
  position : absolute;
  bottom: 99%;
  left : 0;
  width : 100%;
  z-index : -3;

  
`
const SVGBottom = styled.div`
  width : 100%;
`


const NewsLetter = ({ subBodyColor }) => {

  
  return (
    <>
    <MainContainer>
      <Container>
      
        <Title>
          News Letter
        </Title>
        <Description>
          You can connect with us by subscribing to our news letter!
        </Description>
        <Input>
          <Email type="email" placeholder='Enter Your Email'/>
          <Button>
            <SendIcon color="white"/>
          </Button>
        </Input>
        
      </Container>
      <SVGBottom>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dcf7c3" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,197.3C213.3,203,267,213,320,224C373.3,235,427,245,480,250.7C533.3,256,587,256,640,234.7C693.3,213,747,171,800,165.3C853.3,160,907,192,960,192C1013.3,192,1067,160,1120,176C1173.3,192,1227,256,1280,256C1333.3,256,1387,192,1413,160L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </SVGBottom>
    </MainContainer>
    </>
  )
}

export default NewsLetter