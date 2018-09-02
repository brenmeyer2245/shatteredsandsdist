import React from 'react'
import StatDisplay from './SingleCharacter/StatDisplay'
class Character extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log(this)
    this.setState({isClicked: !this.state.isClicked})
  }

  render() {
    const {character} = this.props
    const statNames = [
      'dexterity',
      'charisma',
      'strength',
      'wisdom',
      'constitution',
      'intelligence'
    ]
    return (
      <div
        onClick={this.handleClick}
        className={`flex active characterCard ${
          this.state.isClicked ? 'clicked' : ''
        }`}
      >
        <div className="flexDown characterCard-thumbnail">
          <img className="characterImg" src={'pics/' + character.headshot} />
          <h1 className="characterTitle">{character.name}</h1>
        </div>
        <div className="characterCard-details">
          <p> {character.bio} </p>
          <div className="flexDown statContainer">
            {statNames.map(stat => {
              return (
                <div key={stat} className="flex statRow">
                  <div className="statName">
                    {stat.slice(0, 3).toUpperCase()}
                  </div>
                  <StatDisplay statNumber={character.Stat[stat]} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Character
