import React from 'react'
import styled from 'styled-components'

// Navigation Bar at top of page
const Container = styled.div`
    padding: 1% 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #181e21;
    color: white;
    font-weight: bold;
    font-size: 20px;

    
    position: sticky;
    top: 0;
    overflow: show;
    z-index: 2;

    @media (min-width: 200px) {
        height: 40px;
        font-size: 9px;
      } 

    @media (min-width: 768px) {
        height: 60px;
        font-size: 20px;
    }  
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
    margin-left: 25px;

    @media (min-width: 200px) {
        margin-left: 7px;
      } 

    @media (min-width: 768px) {
        margin-left: 25px;
    }  

`

function Navbar() {
  return (
    <Container>
            <Left>
                THE STUDIO GALLERY & COFFEE BAR
            </Left>
            <Right>
                <NavigationItem> MENU </NavigationItem>
                <NavigationItem> CONTACT </NavigationItem>
                <NavigationItem> ART </NavigationItem>
            </Right>
    </Container>  
  )
}

export default Navbar