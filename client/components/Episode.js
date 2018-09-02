import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const EpisodeTitleLink = styled(Link)`
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
          <img src={'pics/' + episode.icon} />
        </div>
        <div className="episode_text flex m-4">
          <h4>
            {`${episode.series} Book:${episode.bookNumber},Chapter:${
              episode.chapterNumber
            } `}
          </h4>
          <audio controls="controls">
            <source
              src={`http://jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/audio/${
                episode.audio
              }`}
            />
            You're Browser Does not support Audio
          </audio>
        </div>
      </div>
    </div>
  )
}

export default Episode
