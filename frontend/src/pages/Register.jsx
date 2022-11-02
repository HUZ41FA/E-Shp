import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width : 100vw;
    height : 100vh;
    background : linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1663695120949-2b70be0e8c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60") center ;

    display : flex;
    justify-content : center;
    align-items : center;
`
const Wrapper = styled.div`
    padding : 20px;
    width:40%;
    background-color : white;
    border-radius : 10px;
    ${mobile({"width" : "100%", "height" : "100%"})}

    
`
const Title = styled.h1`
    font-size : 24px;
    font-weight : 300;
`
const Form = styled.form`
    display : flex;
    flex-wrap : wrap;
`
const Input = styled.input`
    min-width: 40%;
    margin : 20px 10px 0px 0px;
    flex : 1;
    padding : 10px;
    font-size : 18px;
    border-radius : 5px;
    border : 1px solid teal;
`
const Agreement = styled.span`
    font-size : 12px;
    margin : 20px 0px;
`
const Button = styled.button`
    min-width : 100%;
    padding : 10px;
    font-size : 16px;
    font-weight : 600;
    border : none;
    background-color : teal;
    border-radius : 5px;
    cursor : pointer;
    color : white;

    
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create a New Account</Title>
            <Form>
                <Input placeholder='First name' />
                <Input placeholder='Last name' />
                <Input placeholder='username' />
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Input placeholder='Confirm Password' />
                <Agreement>By creating an account I accept to the collection and processing of my personal information <b>Privacy Policy</b></Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register