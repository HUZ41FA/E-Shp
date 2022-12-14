import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'
import Footer from '../components/Footer'



const Home = () => {

  return (
    <>
        <Announcement/>
        <Navbar/>
        <Slider/>
          <Categories />
          <Products mainHeading={true}/>
          <NewsLetter />
          <Footer />
        
    </>
  )
}

export default Home