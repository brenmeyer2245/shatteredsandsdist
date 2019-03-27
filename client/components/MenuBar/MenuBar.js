import React, {Fragment} from 'react'
import MenuButton from './MenuButton'
import {connect} from 'react-redux'

const MenuBar = props => {
  console.log(props)
  return (
    <div id="menuBar" className="elevatedCard">
      <div className="menuBlock flexDown">
        <MenuButton name="Characters" linked="/characters">
          <div id="Thing" />
          Characters
        </MenuButton>
        <MenuButton name="Home" />
        <MenuButton name="Episodes" linked="/episodes" />
        <MenuButton name="The World" linked="/cities" />
        <MenuButton name="History" linked="/history" />
        <MenuButton name="Search" linked="/search" />
        {props.isLoggedIn && (
          <Fragment>
            <MenuButton name="Add Episode" linked="/addEpisode" />
            <MenuButton name="Add Character" linked="/addCharacter" />
          </Fragment>
        )}
      </div>
    </div>
  )
}

const mapState = state => ({
  isLoggedIn: !!state.user.id
})

export default connect(mapState)(MenuBar)
