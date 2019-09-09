import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default props => {
  return (
    <EpisodeNavWrapper>
      <EpisodeNavLink to={`/characters/${props.characterId}/stats`}>
        Stats
      </EpisodeNavLink>
      <EpisodeNavLink to={`/characters/${props.characterId}/episodes`}>
        Episodes
      </EpisodeNavLink>
      <EpisodeNavLink to={`/characters/${props.characterId}/bio`}>
        Bio
      </EpisodeNavLink>
    </EpisodeNavWrapper>
  )
}

const EpisodeNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(113, 3, 3);
  color: white;
  margin-top: 0em;
`

const EpisodeNavLink = styled(Link)`
  color: white;
  font-size: 1.3em;
  text-decoration: none;
  padding: 0.3em 2.5em;
  margin: 0.7em;
`
