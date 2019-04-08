import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {fetchCurrentEpisode} from '../store'
import {updateAudio} from '../utils/'

export const EpisodeTitleLink = styled(Link)`
  text-decoration: none;
  font-size: 2em;
  color: black;
`


const Episode = props => {
  const {episode} = props
  return (
    <div className="episode_card center elevatedCard font-Merienda">
      <EpisodeTitleLink to={`/episodes/${episode.id}`}>
        {episode.title}
      </EpisodeTitleLink>

      <div className="episode_content flex">
        <div className="episode_icon">
          <img
            src={
              'http://jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/pics/' +
              episode.icon
            }
          />
        </div>
        <div className="episode_text flex m-4">
          <div className="flex font-Merienda font-weight-bold justify-content-center w-100">
              <span>
                {`${episode.series} Book:${episode.bookNumber}`}
              </span>
              <span className="ml-2">
                {`Chapter:${
                  episode.chapterNumber
                }`}
              </span>
          </div>
         { episode.audio && episode.audio.length && (
                        <button onClick={() => {
                                           let myurl = 'http://jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/audio/' + episode.audio
                                            updateAudio(myurl, episode.title)
                                            props.updateCurrentEpisode(episode.id);
                                            }
                                        }
                                className="btn btn-block btn-primary">
                         Play Episode </button>)}
        </div>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  updateCurrentEpisode: (id) => dispatch(fetchCurrentEpisode(id))
})


export default connect(null, mapDispatch)(Episode)
