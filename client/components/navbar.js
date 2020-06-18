import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import MenuBar from './MenuBar/MenuBar';

function toggleClicked(){
  var hamburgerMenu = $('#hamburger-menu')
  if(hamburgerMenu.hasClass('clicked')) {
    $('#menu-bar').removeClass('bg-primary elevatedCard');

    //change the src back to hamburger
    $('#hamburger-menu img').first().attr('src', "/pics/hamburger-menu.png");
  } else {
    $('#menu-bar').addClass('bg-primary elevatedCard');

    //change the src to close icon
    $('#hamburger-menu img').first().attr('src', "/pics/close-icon.png");
  }

  $('#hamburger-menu').toggleClass('clicked');
  $('#menu-bar').toggleClass('clicked');

}

const Navbar = ({isLoggedIn}) => (
  <div>
    <nav className="bg-primary justify-content-between flex position-relative" style={{zIndex: "2"}}>
      <h3 className="nav-text flex-grow-1 px-5 text-white">
        {' '}
        The Shattered Sands Podcast{' '}
      </h3>
      <MenuBar/>
      <div id="hamburger-menu" onClick={toggleClicked} >
        <img src="/pics/hamburger-menu.png"/>
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}


export default connect(mapState)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
