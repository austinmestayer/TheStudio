import React, { Component } from 'react'
import styled from 'styled-components'
import CoffeeIcon from '@mui/icons-material/Coffee';
import Croissant from '@mui/icons-material/BakeryDining';

const Container = styled.div`
    position: relative;
    background-color: #2f3e46;
    top: -16vh;
    margin-left: 10vw;
    margin-right: 10vw;
    width: 80%;
    z-index: 1;
    color: white;
    border-radius: .5em;
    font-family: "Roboto Condensed", sans-serif;
    box-shadow: -1vw 1vw black;

`

const Header = styled.p`
    font-size: 8vw;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 800;
    text-align: center;
    color: white;
    
`

const MenuFace = styled.div`
    position: relative; 
    margin-left: 5vw;
    
`
const Type = styled.p`
    position: relative;
    font-size: 4vw;
    font-weight: 700;
    text-align: center;

    
`
const Category = styled.div`
    position: relative;
    font-size: 2.5vw;
    font-weight: 600;
    font-style: italic;
    
`
const Item = styled.p`
    display: inline-block;
    font-size: 1.5vw;
    font-weight: 400;
    text-align: left;

`
const Price = styled.p`
    display: inline-block;
    font-size: 1.5vw;
    font-weight: 300;

    margin-right: 5vw;
    float: right;

`
const Desc = styled.div`
    font-size: 1.3vw;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    font-style: italic;
    text-align: left;

`


// placeholder for allowing scroll testing for device scaling

//Create on-hover for navigation
function Menu() {
  return (
    <Container>

      <MenuFace>
        <br />

        <Header id="menu"> Menu </Header>
        <br />
        <br />
        <br />
        <Type> Drinks </Type>
        <Category> Coffee </Category>
        <br />

        <Item>Espresso</Item>
        <Price> $2.75 </Price>
        <Desc>Espresso served with sparkling water</Desc>
        <br />

        <Item>Americano </Item>
        <Price> $3.00 </Price>
        <Desc>Espresso topped with hot water</Desc>
        <br />

        <Item>Cappuccino </Item>
        <Price> $3.50 </Price>
        <Desc>Espresso with steamed and foamed milk</Desc>
        <br />

        <Item>Latte (Hot/Iced) </Item>
        <Price> $3.75 </Price>
        <Desc>Espresso with steamed milk</Desc>
        <br />

        <Item> French Press </Item>
        <Price> $6.75 </Price>
        <Desc>Coffee extracted by hot steeping</Desc>
        <br />

        <Item> Cold Brew </Item>
        <Price> $3.25</Price>
        <Desc>Coffee extracted by slow cold-drip steeping</Desc>
        <br />

        <Item> Frapp </Item>
        <Price> $4.00 </Price>
        <Desc>Espresso blended with ice and milk, topped with whipped cream</Desc>
        <br />

        <Item> Flavor Add-Ins </Item>
        <Price> $1 Each </Price>
        <Desc>Vanilla, Caramel, Mocha, White Mocha, Almond, Amaretto, Cane Syrup, Hazelnut, </Desc>
        <Desc> Honey, Peppermint, Pumpkin Spice, Turtle, Sugar Free Vanilla/Caramel</Desc>
        <br />

        <br />
        <br />
        <br />

        <Category> Tea </Category>
        <br />

        <Item> Steeped Tea </Item>
        <Price> $2.30 </Price>
        <Desc>Your choice of a wide selection of tea flavors</Desc>
        <br />

        <Item> Chai Tea Latte </Item>
        <Price> $4.00 </Price>
        <Desc>Chai Tea served with steamed milk and cinnamon</Desc>
        <br />

        <Item> Extras </Item>
        <Price> $1 Each </Price>
        <Desc>Honey, Cinnamon, Milk</Desc>
        <br />

        <br />
        <br />
        <br />

        <Category> Specialties </Category>
        <br />

        <Item> Afogatto </Item>
        <Price> $6 </Price>
        <Desc>Vanilla ice cream topped with espresso</Desc>
        <br />

        <Item> Steamed Milk </Item>
        <Price> $2 </Price>
        <br />

        <br />
        <br />
        <br />

        <Category> Other </Category>
        <br />

        <Item> Soft Drink </Item>
        <Price> $2 </Price>
        <br />
        <br />
        <Item> Water </Item>
        <Price> $2 </Price>
        <br />
        <br />
        <Item> Kombucha </Item>
        <Price> $3 </Price>
        <br />

        <br />
        <br />
        <br />

        <Type>  Food  </Type>
        <Category> Baked Goods </Category>
        <Item> Croissant </Item>
        <Price> $2 </Price>
        <Desc>Served with your choice of butter, jam, etc.</Desc>
        <br />

        <Item> Raspberry Shortbread Tart </Item>
        <Price> $2.75 </Price>
        <br />
        <br />

        <Item> Danish (Cheese, Fruit) </Item>
        <Price> $3.50 </Price>
        <br />
        <br />

        <Item> Everything Bagel </Item>
        <Price> $2.50 </Price>
        <Desc>Served with your choice of butter, jam, etc.</Desc>
        <br />

        <Item> Cinnamon Sugar Blondies </Item>
        <Price> $2.75 </Price>
        <br />
        <br />

        <Item> Apple Strudel </Item>
        <Price> $3.50 </Price>
        <br />

        <br />
      </MenuFace>
    </Container>

  )
}

export default Menu 
