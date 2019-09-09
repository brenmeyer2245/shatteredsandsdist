import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import StatDisplay from './StatDisplay'
import {Route} from 'react-router-dom'
import { urlPrefix } from '../../../Common/Constants';

export default props => {
  const statNames = [
    'dexterity',
    'charisma',
    'strength',
    'wisdom',
    'constitution',
    'intelligence'
  ]
  const {currentCharacter} = props

  return (
    <div className="flex singleCharCard">
      {/* Headshot */}
      <HeadshotBox className="flexDown headshot">
        <CharacterHeader>{currentCharacter.name}</CharacterHeader>
        <img
          src={`${urlPrefix.pics.characters}${
            currentCharacter.headshot
          }`}
        />
      </HeadshotBox>

      <div className="flexDown character_contents">
        <CharacterHeader>{currentCharacter.class}</CharacterHeader>
        <div>
          <p> {currentCharacter.bio}</p>
          <div className="flexDown statContainer">
            {statNames.map(stat => {
              return (
                <div key={stat} className="flex statRow">
                  <div className="statName">
                    {stat.slice(0, 3).toUpperCase()}
                  </div>
                  <StatDisplay statNumber={props.currentStats[stat]} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const CharacterHeader = styled.div`
  background-color: rgba(133, 3, 3);
  text-align: center;
  height: 1.5em;
  color: white;
`

const HeadshotBox = styled.div`
  flex-basis: 30%;
  border: 1px solid black;
`
