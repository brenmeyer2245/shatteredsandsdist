import React from 'react'
import MenuButton from './MenuButton'

const MenuBar = props => {
  return (
    <div className="pageLeft elevatedCard">
      <div className="menuBlock flexDown">
        <MenuButton name="Characters" linked="/characters">
          <div id="Thing" />
          Characters
        </MenuButton>
        <MenuButton name="About" />
        <MenuButton name="Episodes" linked="/episodes" />
        <MenuButton name="The World" linked="/cities" />
        <MenuButton name="History" linked="/history" />
        <MenuButton name="Add Episode" linked="/addEpisode" />
        <MenuButton name="Add Character" linked="/addCharacter" />
      </div>
    </div>
  )
}

export default MenuBar
