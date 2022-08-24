import React from 'react'
import styled from "styled-components"
import backgroundImage from '../resources/coffeecup.jpg'
import MapIcon from '@mui/icons-material/Map';

const Container = styled.div`
    width: 100%
    display: flex;
    overflow: hidden;
    position: relative;
    top: -11vh;

    letter-spacing: 1px;
    font-weight: 800;
    color: white;
    font-size: 5vw; 
`

const Image = styled.img`
    height: 50%;
    width: 100%;
`
const LineOne = styled.span`
    position: absolute;

    top: 28%;
    left: 5%;
`
const LineTwo = styled.span`
    position: absolute;
      
    top: 35%;
    left: 5%;

`
const LineThree = styled.span`
    position: absolute;
    letter-spacing: 1px;
    color: white;
    font-size: 2vw;
    font-weight: 300;
  
    top: 43%;
    left: 5%;
    text-decoration: none;
`

function Body() {
  return (
    <Container id = "home">
            <Image src = {backgroundImage}/> 
            <LineOne> THE STUDIO </LineOne>
            <LineTwo> GALLERY & COFFEE BAR </LineTwo>
            <LineThree> 
              &nbsp;
              <a href="https://goo.gl/maps/Z2fnuDjXgvpkAMsB7" style={{color: 'white', textDecoration: 'none'}}>
                <MapIcon style={{fontSize: '2vw'}}/> 
                &nbsp;
                Saint Martinville, LA 
              </a>
            </LineThree>
    </Container>
  )
}

export default Body