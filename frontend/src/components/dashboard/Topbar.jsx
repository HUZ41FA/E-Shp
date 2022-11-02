import React from 'react'
import styled from 'styled-components'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Container = styled.div`
    background-color : white;
    height : 30px;
    padding : 10px;
    position : sticky;
    top : 0;
    z-index : 999;
`
const TopbarWrapper = styled.div`   
    display : flex;
    justify-content : space-between;
    align-items : center;
`
const TopbarLeft = styled.div`

`
const Logo = styled.span`
    margin : 10px;
    cursor : pointer;
    color : darkblue;
    font-size : 25px;
    font-weight : 900;
`

const Icon = styled.div`
    margin-right : 20px;
`

const TopbarRight = styled.div`
    display : flex;
    align-items : center;
`


const Topbar = () => {
  return (
    <Container>
        <TopbarWrapper>
            <TopbarLeft>
                <Logo>
                    botomatedadmin
                </Logo>
            </TopbarLeft>
            <TopbarRight>
                <Icon>
                    <Badge badgeContent={1} color="error">
                        <NotificationsNoneOutlinedIcon/>
                    </Badge>
                </Icon>
                <Icon>
                    <Badge badgeContent={4} color="error">
                        <LanguageOutlinedIcon/>
                    </Badge>
                </Icon>
                <Icon>
                    <SettingsOutlinedIcon/>
                </Icon>
                <Icon>
                    <Avatar sx={{ bgcolor: "pink", width:"30px", height:"30px" }}>H</Avatar>
                </Icon>
            </TopbarRight>
        </TopbarWrapper>
    </Container>
  )
}

export default Topbar