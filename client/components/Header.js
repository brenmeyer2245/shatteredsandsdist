import React from 'react'
import styled from 'styled-components'

const Header = props => {
  return (
    <HeaderContainer
      className="elevatedCard about"
      style={{
        backgroundImage: `url('http://www.jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/pics/Persian_Palace.jpg')`
      }}
    >
      <h1 className="headerText">Welcome to the Shattered Sands</h1>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
color: white;
font-family: fantasy;
text-align: center;
margin-top: -1.3em;
min-height: 100%;
height: 85vh;
width: 80vw;
background-size: cover;
`

export default Header
