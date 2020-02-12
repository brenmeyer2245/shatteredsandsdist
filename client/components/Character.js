import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import StatDisplay from './SingleCharacter/StatDisplay';
import history from '../history';
import {urlPrefix} from '../../Common/Constants';

class Character extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      isFixed: false,
      infoViewSelected: "stats",
      currentX : 0,
      currentY : 0
    }

    this.handleClick = this.handleClick.bind(this)
    this.characterCard = React.createRef();
    this.updatePosition = this.updatePosition.bind(this);

  }

  componentDidMount(){
    //set listener to update the x and y origin coordiates of the elements on scroll
    const updatePosition = this.updatePosition;
    window.addEventListener("scroll", function(){
      updatePosition();
    })
    //set initial x and y coordinates
    updatePosition();
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", function(){
      update();
    }, true);
  }


  updatePosition(){
    const {x,y} =  this.characterCard.current.getBoundingClientRect();
    this.setState({currentX: x, currentY: y});
  }

  updateInfoView = (evt, viewType) => {
    evt.stopPropagation();
    this.setState({infoViewSelected: viewType});
  }

      /**
       * Clicked Transitions - Each character card sits inside of a parent characterCard-container
       * which has static positioning and places the element in a flow of flexed elements on the page
       * When the character card is clicked, isClicked is set to true, which set the character card's styling to
       * centered top and left. After a timeout of 1 sec, isFixed is set to true which sets positioning to fixed, and
       * triggers the transition. The timeout is necessary for toggling the element back into fixed position
       * We capture the transition caused by the change in top and left when isClicked is changed
       * then, after that transition is complete, the positioning can return back to static
       */

  handleClick() {
    const clicked = this.state.isClicked
    if (clicked){
      this.setState({isClicked: !clicked});
      //then change position back to inline
      const self = this;
      setTimeout(function(){
        self.setState({isFixed: false})
      }, 900);
    } else {
      this.setState({isClicked: !clicked, isFixed: true});
    }
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

      <div className="characterCard-container">
        <div
          ref={this.characterCard}
          onClick={this.handleClick}
          style={{top: this.state.isClicked ? "calc(50vh - 15em)" : this.state.currentY + "px",
                  left: this.state.isClicked ? "calc(50vw - 13.5em)" : this.state.currentX + "px"
                }}

          className={`flex active characterCard ${
            this.state.isClicked ? 'clicked' : ''}
            ${this.state.isFixed ? 'fixed' : ''}
          `}

        >
          <div className="flexDown characterCard-thumbnail">
          <div className="characterImgContainer">
            <img
              className="characterImg"
              src={urlPrefix.pics.characters + character.headshot
              }
            />
            </div>

            <h1 className="characterTitle">{character.name}</h1>
          </div>
          <div className="characterCard-details font-NothingYouCouldDo">


          {/* Check if showBio Button is clicked, show stats by default */}
          { this.state.infoViewSelected === 'stats' ?
            ( //Show Stats
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

            </Fragment>)

            : this.state.infoViewSelected === "bio" ?

          ( // Show Character Bio
            <div className="characterCard-details-bio-container font-NothingYouCouldDo">
              {this.props.character.bio}
            </div>  )
            :
            (//Show Character Episodes
              <div className="characterCard-details-episodeList-container font-NothingYouCouldDo">
              {this.props.character.Episodes.map(episode => (
                <div key={'episode_' + episode.id} className="characterCard-details-episodeList-episode">
                    <a href="#"
                        onClick={(evt) => {
                            evt.stopPropagation();
                            history.replace('/episodes/' + episode.id);
                        }}>
                      {episode.title}
                    </a>
                </div>
              ))}
            </div>
            )
          }
            <div className="flex font-NothingYouCouldDo characterCard-navbar">
              <button className="btn-dark" style={{padding:".3em", marginTop:".8em"}} type="button"
                        onClick={(evt) => {
                          let newInfoView = this.state.infoViewSelected === "stats" ? "bio" : "stats"
                          this.updateInfoView(evt, newInfoView)
                        }}>
                        {this.state.infoViewSelected === "stats" ? "Show Bio" : "Show Stats"}
              </button>
              <button className="btn-dark" style={{padding:".3em", marginTop:".8em", marginLeft:"1em"}} type="button"
                        onClick={(evt) => {
                          let newInfoView = this.state.infoViewSelected === "episodes" ? "bio" : "episodes"
                          this.updateInfoView(evt, newInfoView);
                        }}>
                        {this.state.infoViewSelected === "episodes" ? "Show Bio" : "Show Episodes"}
              </button>
              {this.props.isAdmin && (
                <button className="btn-dark"
                        style={{marginTop:".8em", marginLeft: "4%", width: "29%"}}
                        type="button"
                        onClick={(evt) => {
                                            history.push(`/editCharacter/${character.id}`)
                                  }}
                >
                  Edit Character
                </button>
              )}
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default Character
