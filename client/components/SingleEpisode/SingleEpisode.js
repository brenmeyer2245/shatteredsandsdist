import React from 'react'
import {Route, Link} from 'react-router-dom'
import EpisodeCharacters from './EpisodeCharacters'
import {EpisodeHeader} from './SingleEpisodeHeader'
import {fetchCurrentEpisode} from '../../store/currentEpisodeReducer'
import {connect} from 'react-redux'
import {updateAudio} from '../../utils'
import EpisodeSummary from './EpisodeSummary'
import { urlPrefix } from '../../../Common/Constants';

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
      title,
      audio,
    } = this.props.currentEpisode
    console.log(audio);

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
            path={`/episodes/${episodeId}/audio`}
            render={ () => (
              <div className="mt-4 flexDown">
                  <div className="mt-4 flex flex-wrap" style={{justifyContent: "center"}}>

                  {audio.map((section, id) => (
                   <div className="font-Merienda elevatedCard bg-primary font-Merienda text-center text-white w-25 mt-3 ml-3" key={id}>
                      {' '}
                      <h6>{`Part ${id + 1}`}</h6>
                      <button onClick={() => {
                                           let myurl = urlPrefix.audio + section
                                            updateAudio(myurl, title)
                                            }
                                        }
                                className="btn btn-block btn-primary">
                         Play Episode </button>
                    </div>
                   ))}
              </div>
              </div>
            )}
            />
          <Route
            path={`/episodes/${episodeId}/cast`}
            render={() => (
              <div className="singleEpisodeDeets-base mt-4 elevatedCard flexDown">
              <div className="singleEpisodeDeets-contents mt-4flexDown">
              <h1 className="text-center font-GreatVibes">Cast:</h1>
                {characters.map(character => (
                  <h3 className="font-Merienda" key={character.id}>
                    {' '}
                    {character.name}: {character.actor}
                  </h3>
                ))}
              </div>
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
  getCurrentEpisode: id => dispatch(fetchCurrentEpisode(id)),
})

export default connect(mapStateToProps, mapDispatchToProp)(SingleEpisode)
