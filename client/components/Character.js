import React, {Fragment} from 'react'
import StatDisplay from './SingleCharacter/StatDisplay'
class Character extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      transformX: "",
      transformY: "",
      prevX: this.props.coords.xPosition,
      prevY: this.props.coords.yPosition,
      bioSelected: false
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

   updateShowBio = (evt) => {
    evt.stopPropagation();
    console.log("Butts")
    this.setState({bioSelected: !this.state.bioSelected})

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
    console.log("Show Bio", this.state.bioSelected)
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
            src={"http://www.jbmeyer.org/wp-content/uploads/2018/07/ShatteredSands/pics/" + character.headshot
            }
          />
           </div>

          <h1 className="characterTitle">{character.name}</h1>
        </div>
        <div className="characterCard-details font-NothingYouCouldDo">


        {/* Check if showBio Button is clicked, show stats by default */}
        { !this.state.bioSelected ?
            //Show Stats
            <Fragment>
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

          </Fragment> :

          // Show Character Bio
          <div className="characterCard-details-bio-container font-NothingYouCouldDo">
            {this.props.character.bio}
          </div>

        }
          <button className="btn-dark font-NothingYouCouldDo" style={{padding:".3em", marginTop:".8em"}} type="button" onClick={this.updateShowBio}> {this.state.bioSelected ? "Show Stats" : "Show Bio"} </button>
        </div>
      </div>
    )
  }
}

export default Character
