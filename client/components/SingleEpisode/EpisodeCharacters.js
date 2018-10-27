import React from 'react'

const EpisodeCharacters = props => {
  const {characters} = props
  console.log(props)
  return (
    <div className="singleEpisodeDeets mt-4 elevatedCard red-trim flex-lg-wrap">
      {characters.map(character => (
        <div key={character.id} className="flexDown characterCard">
          <img
            className="characterImg"
            src={
              'http://jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/pics/' +
              character.headshot
            }
          />
          <h1 className="characterTitle">{character.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default EpisodeCharacters
