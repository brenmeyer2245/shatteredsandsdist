import React from 'react'

const EpisodeCharacters = props => {
  const {characters} = props
  console.log(props)
  return (
    <div className="mt-4 flex-lg-wrap flex">
      {characters.map(character => (
        <div key={character.id} className="flex characterCard" style={{position:"inherit"}}>
           <div className="flexDown characterCard-thumbnail" style={{position:"inherit"}}>
            <div className="characterImgContainer">

              <img
                className="characterImg"
                src={
                  'http://jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/pics/' +
                  character.headshot
                }
              />
            </div>
          <h1 className="characterTitle">{character.name}</h1>
        </div>
        </div>

      ))}
    </div>
  )
}

export default EpisodeCharacters
