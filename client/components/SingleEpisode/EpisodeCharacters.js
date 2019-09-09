import React from 'react'
import { urlPrefix } from '../../../Common/Constants';

const EpisodeCharacters = props => {
  const {characters} = props
  return (
    <div className="mt-4 flex-lg-wrap flex">
      {characters.map(character => (
        <div key={character.id} className="flex characterCard" style={{position:"inherit"}}>
           <div className="flexDown characterCard-thumbnail" style={{position:"inherit"}}>
            <div className="characterImgContainer">

              <img
                className="characterImg"
                src={
                  urlPrefix.pics.characters +
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
