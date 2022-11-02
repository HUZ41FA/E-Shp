import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const Container = styled.div`
    flex : 4;
    padding : 20px;
`

const UserTitleContainer = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
`

const UserTitle = styled.h1`
   font-weight : 600;
`

const UserButton = styled.button`
  width : 120px;
  height : 50px;
  font-size : 16px;
  background-color : darkblue;
  color : white;
  border-radius : 5px;
  border : none;
  cursor : pointer;

  &:active {
    background-color : #cccdff;
    color : black;
  }
`

const UserContainer = styled.div`
  display : flex;

`
const UserShow = styled.div`
border-radius : 10px;

  margin-right : 20px;
  flex : 1;
  padding : 20px;
  box-shadow: -3px 5px 26px -1px rgba(0,0,0,0.75);
-webkit-box-shadow: -3px 5px 26px -1px rgba(0,0,0,0.75);
-moz-box-shadow: -3px 5px 26px -1px rgba(0,0,0,0.75);
  
`
const UserUpdate = styled.div`
border-radius : 10px;
flex : 2;
padding : 20px;
box-shadow: -3px 5px 26px -1px rgba(0,0,0,0.75);
-webkit-box-shadow: -3px 5px 26px -1px rgba(0,0,0,0.75);
-moz-box-shadow: -3px 5px 26px -1px rgba(0,0,0,0.75);`


const UserShowTop = styled.div`
    display : flex;
    align-items : center;
`
const UserShowBottom = styled.div``

const UserShowImg = styled.img`
    height : 50px;
    width : 50px;
    border-radius : 50%;
`
const UserShowTopTitle = styled.div`
  display : flex;
  flex-direction : column;
  margin-left : 20px;
`
const UserShowTopName = styled.span`
  font-weight : 800;
`
const UserShowTopJob = styled.span``


const UserShowBottomTitle = styled.span`
  display : flex;
  align-items : center;
  font-size : 24px;
  font-weight : 800;
  margin : 30px 0px 10px 0px;
  

`

const UserShowInfo = styled.div`
  display : flex;
  align-items : center;
  margin : 30px 0px 30px 0px;
  font-weight : 600;
  color : #4e4f4e;
`

const UserShowInfoTitle = styled.span`
  margin-left : 5px;
`

const User = () => {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <UserButton>Create User</UserButton>
      </UserTitleContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowImg src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <UserShowTopTitle>
              <UserShowTopName>Anna Becker</UserShowTopName>
              <UserShowTopJob>Software Engineer</UserShowTopJob>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowBottomTitle>
              Account Details
            </UserShowBottomTitle>
            <UserShowInfo>
              <PermIdentityIcon/>
              <UserShowInfoTitle>annabecker111</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <EmailOutlinedIcon/>
              <UserShowInfoTitle>annabecker@eshp.com</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <LocalPhoneOutlinedIcon/>
              <UserShowInfoTitle>+92 2564 6465 545</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <CalendarMonthOutlinedIcon/>
              <UserShowInfoTitle>11.03.1988</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <FmdGoodOutlinedIcon/>
              <UserShowInfoTitle>Karachi, Pakistan</UserShowInfoTitle>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>

        </UserUpdate>
      </UserContainer>

    </Container>
  )
}

export default User