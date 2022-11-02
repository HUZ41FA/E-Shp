import React from 'react'
import styled from 'styled-components'
import HomeWidgets from '../../components/dashboard/HomeWidgets'
import Sidebar from '../../components/dashboard/Sidebar'
import Topbar from '../../components/dashboard/Topbar'
import Home from './Home'
import User from './User'


const Container = styled.div`
  overflow : hidden;
`



const DashboardHome = () => {
  return (
    <>
        <Sidebar/>
          <User />
        
    </>
  )
}

export default DashboardHome