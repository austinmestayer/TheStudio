import React, { useState } from 'react'
import styled from 'styled-components'
import CoffeeIcon from '@mui/icons-material/Coffee';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-scroll'
import './Navbar.style.css'
import './carousel.component.js'
import '../pages/Home.jsx'

// Navigation Bar at top of page
const Container = styled.div`
    // set position to top of page
    position: sticky;
    top: 0;

    padding: 1% 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-weight: bold;
    overflow: show;
    z-index: 10;
    height: 6vh;
    font-size: 1.25vw;

`
// Center-left division of flexbox
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    cursor: pointer;

`
// Center-right division of flexbox
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
// Right => NavigationItem child node
const NavigationItem = styled.div`
    cursor: pointer;
    margin-left: 3vw;
`


function Navbar() {

    //  event listener function for determining when
    //  to alter color of navigation bar in relation 
    //  to distance from top of page
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if(window.scrollY >= 40) {
            setColorChange(true);
        }
        else {
            setColorChange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

  return (
    <Container className = { colorChange ? 'navbar-solid' : 'navbar:transparent' } >
            <Left>
                <CoffeeIcon style={{ height: "1.5vw" }} />
                &nbsp;
                <Link to = "home" spy={true} smooth={true}> THE STUDIO GALLERY & COFFEE BAR </Link>
            </Left>
            <Right>
                <NavigationItem><Link to = "menu" spy={true} offset={-120} smooth={true}> MENU </Link></NavigationItem>
                <NavigationItem><Link to = "art" spy={true} offset={-100} smooth={true}> GALLERY </Link></NavigationItem>
                <NavigationItem> CONTACT </NavigationItem>
                <NavigationItem> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjB3oeutdv5AhXAmYQIHWmPB6kQ_Bd6BAhXEAQ&url=https%3A%2F%2Fm.facebook.com%2FThe-Studio-Gallery-Coffee-Bar-105268177734542%2F&usg=AOvVaw2G_Ps6_PPAYZ4gn9GZnh-t" style={{color: 'white', textDecoration: 'none'}}> <FacebookIcon style={{ height: "1.5vw" }} /> </a> </NavigationItem>
            </Right>
    </Container>  
  )
}

export default Navbar