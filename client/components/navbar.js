import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className="bg-primary nav-justified flex">
      <h1 className="nav-text flex-grow-1 px-5 text-white">
        {' '}
        The Shattered Sands Podcast{' '}
      </h1>
      <div className="nav-item">
        {isLoggedIn ? (
          <a className="text-white" href="#" onClick={handleClick}>
            Logout
          </a>
        ) : (
          <Fragment>
            {/* The navbar will show these links before you log in */}
            <Link className="text-white" to="/login">
              Login
            </Link>
            <Link className="text-white" to="/signup">
              Sign Up
            </Link>
          </Fragment>
        )}
      </div>
    </nav>
    <hr />
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

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
