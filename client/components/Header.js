import React from 'react'
import styled from 'styled-components'

const Header = props => {
  return (
    <div
      className="elevatedCard about"
      style={{
        backgroundImage: `url('/pics/book_background.jpg')`
      }}
    >
      <h1 className="headerText">Welcome to the Shattered Sands</h1>
    </div>
  )
}

// const HeaderContainer = styled.div`
// color: white;
// font-family: fantasy;
// text-align: center;
// margin-top: -1.3em;
// height: 52em;
// width: 40em;
// background-size: contain;
// `

export default Header
