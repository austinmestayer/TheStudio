import React from 'react'
import styled from 'styled-components'
import painting1 from './images/Paintings/1.jpg'
import painting2 from './images/Paintings/2.jpg'
import painting3 from './images/Paintings/3.jpg'
import painting4 from './images/Paintings/4.jpg'
import painting5 from './images/Paintings/5.jpg'
import painting6 from './images/Paintings/6.jpg'
import painting7 from './images/Paintings/7.jpg'
import painting8 from './images/Paintings/8.jpg'
import painting9 from './images/Paintings/9.jpg'
import painting10 from './images/Paintings/10.jpg'
import painting11 from './images/Paintings/11.jpg'
import painting12 from './images/Paintings/12.jpg'


const Header = styled.p `
    font-size: 8em;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 800;
    text-align: center;
    color: white;
    
`

const ListHeader = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
`
const ListItem = styled.li`
    height: 80vh;
    flex-grow: 1;
    padding: 1em;
`

const Painting = styled.img`
    max-height: 100%;
    min-width: 100%;
    object-fit: scale-down;
    vertical-align: bottom;
`


const Art = () => {
  return (
    <div>
        <Header  id = "art"> Art </Header>

        <ListHeader>

            <ListItem>
                <Painting src = {painting1}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting2}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting3}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting4}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting5}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting6}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting7}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting8}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting9}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting10}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting11}/>
            </ListItem>

            <ListItem>
                <Painting src = {painting12}/>
            </ListItem>

        </ListHeader>

    </div>
  )
}

export default Art
