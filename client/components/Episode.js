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
    <div className="episode_card center elevatedCard ">
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
          <h4>
            {`${episode.series} Book:${episode.bookNumber},Chapter:${
              episode.chapterNumber
            }`}
          </h4>
          <button onClick={() => {
                    let myurl = 'http://jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/audio/' + episode.audio
                    updateAudio(myurl, episode.title)
                    props.updateCurrentEpisode(episode.id);
                }
          }> Play Episode </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  updateCurrentEpisode: (id) => dispatch(fetchCurrentEpisode(id))
})


export default connect(null, mapDispatch)(Episode)
