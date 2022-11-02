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
    width:26%;
    background-color : white;
    border-radius : 10px;
    ${mobile({"width" : "75%"})}

    
`
const Title = styled.h1`
    font-size : 24px;
    font-weight : 300;
`
const Form = styled.form`
    display : flex;
    flex-direction : column;
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
const AgreementContainer = styled.div`
  display : flex;
  margin : 20px 0px;
  flex-direction : column;
  margin-bottom : 5x;
`

const Agreement = styled.span`
    font-size : 12px;
    margin-bottom : 5px;

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

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form>
                <Input placeholder='username' />
                <Input placeholder='Password' />
                <AgreementContainer>
                  <Agreement>Dont have an account?<b> Sign up now!</b></Agreement>
                  <Agreement>Forgot your password?<b> reset password</b></Agreement>
                </AgreementContainer>
                <Button>Login</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login