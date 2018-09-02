import React from 'react'

const EpisodeCharacters = props => {
  const {characters} = props
  console.log(props)
  return (
    <div className="singleEpisodeDeets m-4 elevatedCard red-trim">
      {characters.map(character => (
        <div
          key={character.id}
          className="flexDown characterCard"
          handleClick={() => console.log('Shattered Sands')}
        >
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
