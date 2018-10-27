import React from 'react'
import {Route, Link} from 'react-router-dom'
import EpisodeCharacters from './EpisodeCharacters'
import {EpisodeHeader} from './SingleEpisodeHeader'
import {fetchCurrentEpisode} from '../../store/currentEpisodeReducer'
import {connect} from 'react-redux'
import EpisodeSummary from './EpisodeSummary'

//Styled Components
const CharacterCard = props => {
  props.characters.map(character => {
    console.log(character)
    // return <Character character={character} />;
    return <h1 key={character.name}>{character.name} </h1>
  })
}

class SingleEpisode extends React.Component {
  async componentDidMount() {
    const episodeId = this.props.match.params.episodeId
    try {
      console.log('Test')
      await this.props.getCurrentEpisode(episodeId)
    } catch (err) {
      console.log('Error!', err)
    }
  }

  render() {
    const {
      series,
      bookNumber,
      chapterNumber,
      bookTitle,
      title
    } = this.props.currentEpisode
    const characters = this.props.currentEpisode.Characters
    const episodeId = this.props.currentEpisode.id
    return (
      <div className="episodePage">
        <div>
          <EpisodeHeader episode={this.props.currentEpisode} />

          <Route
            path={`/episodes/${episodeId}/characters`}
            render={routeProps => <EpisodeCharacters characters={characters} />}
          />
          <Route
            path={`/episodes/${episodeId}/summary`}
            render={() => <EpisodeSummary {...this.props.currentEpisode} />}
          />
          <Route
            path={`/episodes/${episodeId}/cast`}
            render={() => (
              <div className="singleEpisodeDeets mt-4 elevatedCard red-trim flexDown">
                {characters.map(character => (
                  <h4 key={character.id}>
                    {' '}
                    {character.name}: {character.actor}
                  </h4>
                ))}
              </div>
            )}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentEpisode: state.currentEpisode
})
const mapDispatchToProp = dispatch => ({
  getCurrentEpisode: id => dispatch(fetchCurrentEpisode(id))
})

export default connect(mapStateToProps, mapDispatchToProp)(SingleEpisode)
