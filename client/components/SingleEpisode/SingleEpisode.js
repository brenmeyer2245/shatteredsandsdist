import React from 'react'
import {Route, Link} from 'react-router-dom'
import EpisodeCharacters from './EpisodeCharacters'
import {EpisodeHeader} from './SingleEpisodeHeader'
import {fetchCurrentEpisode} from '../../store/currentEpisodeReducer'
import {connect} from 'react-redux'

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
      cast,
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
            render={() => (
              <div className="singleEpisodeDeets m-4 elevatedCard red-trim flexDown">
                <h2>
                  {series} Book: {bookNumber}, {bookTitle}
                </h2>
                <h2>
                  Chapter {chapterNumber}: {title}
                </h2>
                <p>
                  {this.props.currentEpisode.summary
                    ? this.props.currentEpisode.summary
                    : 'No Summary Listed'}{' '}
                </p>
              </div>
            )}
          />
          <Route
            path={`/episodes/${episodeId}/cast`}
            render={() => (
              <div className="singleEpisodeDeets m-4 elevatedCard red-trim flexDown">
                {cast.split(',').map(person => <h4 key={person}> {person}</h4>)}
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
