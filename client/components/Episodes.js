import Episode from './Episode'
import React from 'react'

const Episodes = props => {
  return (
    <div>
      {props.episodes.map(episode => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </div>
  )
}

export default Episodes
