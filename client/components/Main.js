import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'
import {fetchCharacters} from './store/charactersReducer'
import {fetchCurrentCharacter} from './store/currentCharacterReducer'
import {fetchEpisodes} from './store/episodesReducer'
import MenuBar from './MenuBar/MenuBar'
import Routes from './Routes'
class Main extends React.Component {
  componentDidMount() {
    this.props.getCharacters().then(() => console.log('Characters Got'))
    this.props.getCurrentCharacter(1)
    this.props.getEpisodes().then(() => console.log('Got Episodes'))
  }

  render() {
    return (
      <Router>
        <div id="container" className="flex">
          <ContentFrame className="flex">
            <MenuBar />
            <div id="pageRight">
              <Routes />
            </div>
          </ContentFrame>
        </div>
      </Router>
    )
  }
}

const ContentFrame = styled.div`
  min-height: 50em;
  min-width: 40em;
  position: absolute;
  top: 10em;
  left: calc(50% - 30em);
`

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(fetchCharacters()),
  getCurrentCharacter: id => dispatch(fetchCurrentCharacter(id)),
  getEpisodes: () => dispatch(fetchEpisodes())
})

export default connect(null, mapDispatchToProps)(Main)
