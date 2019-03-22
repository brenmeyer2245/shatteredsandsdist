import React from 'react'
import StatDisplay from './SingleCharacter/StatDisplay'
class Character extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      transformX: "",
      transformY: "",
      prevX: this.props.coords.xPosition,
      prevY: this.props.coords.yPosition
    }

    this.applyTransform = this.applyTransform.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.characterCard = React.createRef();

  }

  componentDidMount(){

  }

  applyTransform(){
      let {x, y} = this.characterCard.current.getBoundingClientRect()
      console.log("Transform", this.props.character.name, x, y)

     if (!this.state.isClicked){

        //If y is lt 150, transformTop, gt 400, transformBottom, else do nothing
        let topOrBottom = (y < 150) ? "transformBottom" : "transformTop";
        //if x is lt 450, transformLeft, gt 800 transformRight, else do nothing
        let rightOrLeft = (x < 450) ? "transformLeft" : (x > 800) ? "transformRight" : ""
        console.log(topOrBottom, rightOrLeft)
        this.setState({transformX: rightOrLeft, transformY: topOrBottom })
     } else {
      this.setState({transformX: "", transformY: "" })
     }


  }


  handleClick() {
    this.applyTransform();
    this.setState({isClicked: !this.state.isClicked})
  }

  render() {
    const {character} = this.props
    const {xPosition, yPosition} = this.props.coords
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
        ref={this.characterCard}
        onClick={this.handleClick}
        className={`flex active characterCard ${this.state.transformY} ${
          this.state.isClicked ? 'clicked' : ''
        } ${this.state.transformX} `}
        style = {{top: `${this.state.prevY}em`, left: `${this.state.prevX}em`}}
      >
        <div className="flexDown characterCard-thumbnail">
        <div className="characterImgContainer">
          <img
            className="characterImg"
            src={"/pics/Kal_headshot_cartoon.png"
            }
          />
           </div>

          <h1 className="characterTitle">{character.name}</h1>
        </div>
        <div className="characterCard-details">

          <div className="flex statContainer">
              {/* Row of All the Column Names */}
              <div className="rowLeft flexdown">
              {statNames.map(stat => {
              return (
                  <div key={stat + "Title"} className="statName">
                    {stat.slice(0, 3).toUpperCase()}
                  </div>
              )
            })}
              </div>
              {/* Row of Stats  */}
              <div className="characterCard-Stats-rowRight flexdown">
            {statNames.map(stat => {
              return (
                <div key={stat} className="flex statRow">
                  <StatDisplay statNumber={character.Stat[stat]} />
                </div>
              )
            })}
            </div>
          </div>
          <p> {`Blurb about the character`}</p>
          {/* <p> {character.bio} </p> */}
        </div>
      </div>
    )
  }
}

export default Character
