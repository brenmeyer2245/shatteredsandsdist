import React, {Fragment} from 'react'
import MenuButton from './MenuButton'
import {connect} from 'react-redux';
import {logout} from '../../store/index';

const MenuBar = props => {
  return (
      <div className="flex" id="menu-bar">
        <MenuButton name="Characters" linked="/characters">
          <div />
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

        {props.isLoggedIn ? (
          <div style={{cursor: "pointer"}} className="nav-item text-white" onClick={() => {props.logoutUser()}} >
            <a role="button">
            Logout
            </a>
         </div>
          ) : (
          <Fragment>
            {/* The navbar will show these links before you log in */}
            <MenuButton className="text-white" name="Login" linked="/login">
              Login
            </MenuButton>
            <MenuButton className="text-white" name="SignUp" linked="/signup">
              Sign Up
            </MenuButton>
          </Fragment>
        )}

      </div>
        )
}

const mapDispatch = dispatch => ({
  logoutUser: () => {
    dispatch(logout())
  }
});

const mapState = state => ({
  isLoggedIn: !!state.user.id,
  isAdmin: state.user.role === 'admin',
})
export default connect(mapState, mapDispatch)(MenuBar)
