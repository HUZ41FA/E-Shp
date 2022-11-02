import React from 'react'
import styled from 'styled-components'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/dashboard/featuredInfo/FeaturedInfo'
import HomeWidgets from '../../components/dashboard/HomeWidgets'


const Container = styled.div`
    flex : 4
    
`

const Home = () => {
  return (
    <Container>
        <FeaturedInfo/>
        <Chart/>
        <HomeWidgets/>
    </Container>
  )
}

export default Home