import React from 'react'
import styled from 'styled-components'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const Conatainer = styled.div`
    flex :1;
    left : 0;
    top : 50px;
    position : sticky;
    height : calc(100vh - 50px);
    background-color : #f2f2f2;
`

const SidebarWrapper = styled.div`
    padding : 20px 0px;
`

const Title = styled.div`
    font-weight : 800;
    font-size :16px;
    margin-left : 10px;
    color : #525252;
`
const List = styled.ul`
    list-style : none;
    padding : 10px 20px;
    margin : 0px;
`

const ListItem = styled.li`
    background-color : ${props=>props.isActive ? "#ddd7fa" : "transparent"};
    border-radius : 5px;
    display : flex;
    align-items : center;
    justify-content : start;
    padding : 10px;
    padding-left : 30px;
    margin-bottom : 5px;
    &:hover {
        background-color : #efe8ff;
    }
    
`

const ListText = styled.span`

    margin-left : 10px;
`

const Sidebar = () => {
  return (
    <Conatainer>
        <SidebarWrapper>
            <Title>Dashboard</Title>
            <List>
                <ListItem isActive={true}><HomeOutlinedIcon/><ListText>Home</ListText></ListItem>
                <ListItem isActive={false}><TimelineOutlinedIcon/> <ListText>Analytics</ListText></ListItem>
                <ListItem isActive={false}><TrendingUpOutlinedIcon/> <ListText>Trend</ListText></ListItem>
            </List>
            <Title>Quick Menu</Title>
            <List>
                <ListItem isActive = {false}><GroupIcon/> <ListText>Users</ListText></ListItem>
                <ListItem isActive = {false}><CategoryIcon/> <ListText>Products</ListText></ListItem>
                <ListItem isActive = {false}><ReceiptLongIcon/> <ListText>Transactions</ListText></ListItem>
                <ListItem isActive = {false}><AssessmentOutlinedIcon/> <ListText>Reports</ListText></ListItem>
            </List>
            <Title>Notifications</Title>
            <List>
                <ListItem isActive = {false}><MailOutlineIcon/> <ListText>Mail</ListText></ListItem>
                <ListItem isActive = {false}><ThumbUpOffAltIcon/> <ListText>Feedback</ListText></ListItem>
                <ListItem isActive = {false}><ChatBubbleOutlineIcon/> Messages</ListItem>
            </List>
            <Title>Staff</Title>
            <List>
                <ListItem isActive = {false}><ManageAccountsOutlinedIcon/> <ListText>Manage</ListText></ListItem>
                <ListItem isActive = {false}><AssessmentOutlinedIcon/> <ListText>Reports</ListText></ListItem>
            </List>
        </SidebarWrapper>
    </Conatainer>
  )
}

export default Sidebar