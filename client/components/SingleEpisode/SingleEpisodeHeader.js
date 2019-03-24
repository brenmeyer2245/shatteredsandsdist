import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import SingleEpisodeNavBar from './SingleEpisodeNavBar'

const EpisodeHeader = props => {
  const {episode} = props
  return (
    <div>
      <div className="episode-single-header" style={{
          backgroundImage: `url("http://jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/pics/${
            props.episode.icon
          }")`
        }}
      >
        <h2 className="mt-4" style={{padding: "2em"}}>{props.episode.title}</h2>
        </div>
      <SingleEpisodeNavBar {...episode} episodeId = {props.episode.id} />

    </div>
  )
}

export {EpisodeHeader}
