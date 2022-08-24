import React from 'react'
import styled from "styled-components"
import Body from '../components/Body'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import ScrollToTop from "react-scroll-to-top";
import ArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import CarouselComponent from '../components/carousel.component'

const Header = styled.p `
    font-size: 8vw;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 800;
    text-align: center;
    color: white;
    position: relative;   
    top: -30px; 
`

const Home = () => {
    return (
            <div style={{backgroundColor: '#0B2545'}}>
                <ScrollToTop smooth component = { <ArrowUp/> } style={{color: 'white', backgroundColor: '#2f3e46', boxShadow:'-.5em .5em black'}} />
                <Navbar/>
                <Body/>
                <Menu/>
                <Header id="art"> Gallery </Header>
                <CarouselComponent/>
            </div>
    )
}

export default Home
