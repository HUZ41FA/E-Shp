import React from 'react'
import styled from 'styled-components'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderData } from '../data/data';
import { mobile } from '../responsive';

const Container = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    background-image : white;
    position : relative;
    overflow : hidden;
    ${mobile({"display" : "none"})}

    
`
const Arrow =styled.div`
    height : 50px;
    width : 50px;
    border-radius : 50%;
    background-color : white;
    display : flex;
    align-items : center;
    justify-content : center;
    position : absolute;
    top : 0;
    bottom : 0;
    left : ${props => props.direction === 'left' && "10px"};
    right : ${props => props.direction === 'right' && "10px"};
    margin : auto;
    cursor : pointer;
    opacity : 0.5;
    z-index = -4;
`
const Wrapper = styled.div`
    height: 100%;
    display : flex;
    transform : translateX(${props=>props.slideIndex * -100}vw);
    transition : all 1.0s ease;
`
const Slide = styled.div`
    height : 100%;
    width : 100vw;
    display:flex;
    align-items : center;
    justify-content : center;
    background-image: linear-gradient(${props=>props.bg[0]},${props=>props.bg[1]});
    
`

const ImageContainer = styled.div`
    width : 50vw;
    height : 100vh;
    flex : 1;
    display :flex;
    align-items : center;
    justify-content : center;
    `
const Image = styled.img`
    width : 100%;
    object-fit : fit;
     
`
const ImageInfoContainer = styled.div`
    width : 50vw;
    flex : 1;
    padding : 50px;
    max-height : 100%;
 
`
const Title = styled.h1`
    font-size : 50px;
    font-weight : 800;
    color : black;
`
const Description = styled.p`
    font-size : 20px;
    font-weight : 200;
    color : black;
    letter-spacing : 3px;
    margin-top : 50px;
    margin-bottom : 50px;
`
const Button = styled.button`
    border : none;
    width : 150px;
    height : 70px;
    font-size : 20px;
    color : white;
    background-color: black;
    border-radius : 5px;
    cursor : pointer;
    `

const Slider = () => {
  const [slideIndex, setSlideIndex] = React.useState(0)
  

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(prev=>
        {if(prev > 0){
            return prev - 1
        }
        else{return sliderData.length - 1}});
    
    } else {
        setSlideIndex(prev=>
            {if(prev < sliderData.length -1){
                return prev + 1
            }
            else{return 0}});
        
    }
    

  };

  return (
    <Container>
        <Wrapper slideIndex={slideIndex}>
            {sliderData.map((slide)=>{
                return( 
                    <Slide key={slide.title} bg={slide.backgroundColor}>
                        <ImageContainer>
                            <Image src={slide.image} />
                        </ImageContainer>
                        <ImageInfoContainer>
                            <Title>
                                {slide.title}
                            </Title>
                            <Description>
                                {slide.description}
                            </Description>
                            <Button>Hire Now!</Button>
                        </ImageInfoContainer>
                    </Slide>
                    )
            })}
        </Wrapper>
        <Arrow direction='left' onClick={()=>handleArrowClick('left')}>
            <ArrowBackIosOutlinedIcon/>
        </Arrow>
        <Arrow direction='right' onClick={()=>handleArrowClick('right')}>
            <ArrowForwardIosOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider