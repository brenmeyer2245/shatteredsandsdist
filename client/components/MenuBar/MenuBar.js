import React, {Fragment} from 'react'
import MenuButton from './MenuButton'
import {connect} from 'react-redux'

const MenuBar = props => {
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
        {props.isAdmin && (
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
  isLoggedIn: !!state.user.id,
  isAdmin: state.user.role === 'admin'
})

export default connect(mapState)(MenuBar)
