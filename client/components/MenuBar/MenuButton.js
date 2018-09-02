import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
//**TODO: Make Routes for all of Buttons and then only return NavLinks */

const MenuButtonLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const MenuButton = props => {
  return (
    <div className="menuItems flexDown">
      <MenuButtonLink to={props.linked || '/'}>{props.name}</MenuButtonLink>
    </div>
  )
}

export default MenuButton
