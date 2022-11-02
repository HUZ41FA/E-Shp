import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
    display : flex;
    position : relative;
    background-color: white;
    height : 40vh;
    z-index : 0;
    padding: 20px;
    ${mobile({
        "flex-direction" : "column",
    })}
`


const Left = styled.div`
    flex:1;
`
const Center = styled.div`
    display:flex;
    flex:1;
    flex-direction : column;
    ${mobile({"display" : "none"})}

    
`
const Right = styled.div`
    display:flex;
    flex:1;
    justify-content : center;
    flex-direction : column;
    
`

const Logo = styled.h1`
    font-weight : bold;
    font-size : 30px;
    color : black;
`
const Description = styled.p`
    font-size : 30;
    margin : 0;
    `
const SocialMedia = styled.div`
    margin-top : 10px;
    display : flex;
`


const Icon = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    height : 30px;
    width : 30px;
    border-radius : 50%;
    background-color : ${props=>props.bg};
    margin : 5px;
    cursor : pointer;
    transition : all 0.25s ease;

    &:hover {
        
        transform : scale(1.2);
    }
`
const Title = styled.h1`
font-size : 20px;
color : black;
margin-bottom : 0;
`
const List = styled.ul`
    list-style : none;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
`
const ListItem = styled.li`
    width : 50%;
    margin-bottom : 10px;
`
const ContactUsContainer = styled.div` 
    display : flex;
    margin : 0;
    height : 100%;
    align-items : center;
`

const Footer = ({subBodyColor}) => {
  return (
    <Container>
        <Left>
            <Logo>Botomated</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque qui delectus mollitia ipsam amet voluptates at magni corrupti a.
            </Description>
            <SocialMedia>
                <Icon bg={"#4267B2"}>
                    <FacebookIcon />
                </Icon>
                <Icon bg={"#8a3ab9"}>
                    <InstagramIcon />
                </Icon>
                <Icon bg={"#0077b5"}>
                    <LinkedInIcon />
                </Icon>
                <Icon bg={"#1DA1F2"}>
                    <TwitterIcon />
                </Icon>
            </SocialMedia>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact us</Title>
            <ContactUsContainer>
                <Icon>
                    <RoomOutlinedIcon/>
                </Icon>
                <Description>House 451, ABC 123, Eastern Street, Karachi, Pakistan</Description>
            </ContactUsContainer>
            <ContactUsContainer>
                <Icon>
                    <LocalPhoneOutlinedIcon/>
                </Icon>
                <Description>+92 0412 129 143</Description>
            </ContactUsContainer>
            <ContactUsContainer>
                <Icon>
                    <MailOutlineOutlinedIcon/>
                </Icon>
                <Description>huzaifakhanned@gmail.com</Description>
            </ContactUsContainer>
        </Right>
    </Container>
  )
}

export default Footer