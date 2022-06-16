import React from 'react'
import styled from "styled-components"
import backgroundImage from '../resources/coffeecup.jpg'

const Container = styled.div`
    width: 100%
    display: flex;
    position: relative;
    overflow: hidden;

    letter-spacing: 1px;
    font-size: 60px;
    font-weight: 800;
    color: white;
`

const Image = styled.img`
    height: 50%;
    width: 100%
`

const LineOne = styled.span`
    position: absolute;
    top: 29%;
    left: 5%;
`
const LineTwo = styled.span`
    position: absolute;
    top: 35%;
    left: 5%;
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