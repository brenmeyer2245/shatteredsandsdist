import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import SingleEpisodeNavBar from './SingleEpisodeNavBar'

const EpisodeHeader = props => {
  const {episode} = props
  console.log(episode)
  return (
    <div>
      <BackgroundCard
        style={{
          backgroundImage: `url(http://jbmeyer.org/wp-content/uploads/ShatteredSands/pics/${
            props.episode.icon
          })`
        }}
      >
        <h2 className="mt-4">{props.episode.title}</h2>
        <audio className="mt-4" controls="controls">
          <source
            src={`http://jbmeyer.org/wp-content/uploads/2018/07/audio/${
              episode.audio
            }`}
          />
          You're Browser Does not support Audio
        </audio>
      </BackgroundCard>
      <SingleEpisodeNavBar episodeId={props.episode.id} />
    </div>
  )
}

const BackgroundCard = styled.div`
  text-align: center;
  color: white;
  min-height: 20em;
  background-position: 10% 0%;
  background-size: cover;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  box-shadow: 0.7em 0.7em rgba(12, 1, 1, 0.2);
`

export {EpisodeHeader, BackgroundCard}
