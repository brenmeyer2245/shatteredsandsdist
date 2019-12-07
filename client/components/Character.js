import React, {Fragment} from 'react';
import StatDisplay from './SingleCharacter/StatDisplay';
import history from '../history';
import {urlPrefix} from '../../Common/Constants';
import { consolidateStreamedStyles } from 'styled-components';

class Character extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      infoViewSelected: "stats",
      currentX : 0,
      currentY : 0
    }

    this.handleClick = this.handleClick.bind(this)
    this.characterCard = React.createRef();

  }

  componentDidMount(){
    //set top and left for transistions
    const {x,y} =  this.characterCard.current.getBoundingClientRect();
    this.setState({currentX: x, currentY: y});

  }



  updateInfoView = (evt, viewType) => {
    evt.stopPropagation();
    this.setState({infoViewSelected: viewType});
  }

  handleClick() {
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
        ref={this.characterCard}
        onClick={this.handleClick}
        style={{top: this.state.isClicked ? "" : this.state.currentY + "px",
                left: this.state.isClicked ? "" : this.state.currentX + "px"
              }}

        className={`flex active characterCard ${
          this.state.isClicked ? 'clicked' : ''
        }`}

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
    )
  }
}

export default Character
