import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  AllCharacters,
  SingleEpisode,
  Header,
  AllCities,
  CreateCharacter,
  CreateEpisode,
  AllEpisodes,
  EditCharacter,
  EditEpisode,
  EpisodeForm
} from './components'

import History from './components/History/History'
import {me, fetchCharacters, fetchEpisodes} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={AllEpisodes} />
        <Route exact path="/episodes" component={AllEpisodes} />
        <Route exact path="/characters" component={AllCharacters} />
        <Route path="/episodes/:episodeId" component={SingleEpisode} />
        <Route path="/history" component={History} />
        <Route path="/cities" component={AllCities} />
        <Route exact path="/mock" component={EpisodeForm} />
        {isLoggedIn &&
        (<Switch>
            <Route path="/addCharacter" component={CreateCharacter} />
            <Route path="/addEpisode" component={CreateEpisode} />
            <Route path="/editCharacter/:characterId" component={EditCharacter} />
            <Route path="/editEpisode/:episodeId" component={EditEpisode} />
          </Switch>)
        }

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(fetchCharacters())
      dispatch(fetchEpisodes())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
