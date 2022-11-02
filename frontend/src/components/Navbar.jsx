import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { mobile } from '../responsive';


const Container = styled.div`
    height : 60px;
    background-color : white;
    overflow: hidden;    
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    ${mobile({padding:"10px 10px"})}
`

const Left = styled.div`
    flex : 1;
    display: flex;
    align-items : center;
    ${mobile({display:"none"})}    
`

const Center = styled.div`
    flex : 1;
    display: flex;
    justify-content: center;
    align-items : center;
`

const Right = styled.div`
    flex :  1;
    display: flex;
    justify-content: center;
    align-items : center;
    justify-content : flex-end; 
    color : black;
    ${mobile({"justify-content":"flex-end", "flex" : 2})}
`

const MenuItem = styled.div`
    font-size : 15px;
    cursor : pointer;
    margin-left : 25px;
    ${mobile({"font-size":"12px", "margin-left" : "10px"})}
`

const Language = styled.div`
    font-size : 14;
    cursor : pointer;
    color : black;
    align-items : center;
    ${mobile({"display":"none"})}
`

const SearchContainer = styled.div`
    display : flex;
    border : 0.5px solid;
    align-items : center;
    margin-left : 20px;
    border-radius : 5px;
    border-color : black;
    ${mobile({"width":"50px"})}
`

const Logo = styled.div`
    font-weight : bold;
    font-size : 30px;
    color : black;
    ${mobile({"font-size":"20px"})}
`

const Input =  styled.input`
    outline : none;
    border : none;
    background-color : white;
    height : 100%;
    color : black;
    width : 100%;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input/> 
                    <SearchIcon style={{color:"gray"}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Botomated</Logo>
            </Center>
            <Right>
                <MenuItem>
                    Register
                </MenuItem>
                <MenuItem>
                    SIgn-in
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="error">
                        <NotificationsNoneOutlinedIcon color="white" />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar