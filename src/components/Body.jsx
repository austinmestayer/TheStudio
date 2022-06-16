import React from 'react'
import styled from "styled-components"
import backgroundImage from '../resources/coffeecup.jpg'

const Container = styled.div`
    width: 100%
    display: flex;
    position: relative;
    overflow: hidden;

    letter-spacing: 1px;
    font-weight: 800;
    color: white;

    @media (min-width: 200px) {
      font-size: 5vw;
    } 

    @media (min-width: 768px) {
      font-size: 5vw;
    }  
`

const Image = styled.img`
    height: 50%;
    width: 100%
     
`

const LineOne = styled.span`
    position: absolute;
    

    @media (min-width: 200px) {
      top: 25%;
      left: 5%;
    } 

    @media (min-width: 768px) {
      top: 28%;
      left: 5%;
    }  
`
const LineTwo = styled.span`
    position: absolute;

    @media (min-width: 200px) {
      top: 33%;
      left: 5%;
    } 
    @media (min-width: 768px) {
      top: 35%;
      left: 5%;
    }  
`

function Body() {
  return (
    <Container>
            <Image src = {backgroundImage}/> 
            <LineOne> THE STUDIO </LineOne>
            <LineTwo> GALLERY & COFFEE BAR. </LineTwo>
    </Container>
  )
}

export default Body