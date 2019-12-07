import React from 'react'
import {connect} from 'react-redux'
import {playAudio, updateAudioTime, changeAudioBySeconds} from '../../utils';
import {urlPrefix} from '../../../Common/Constants';

class SideBarAudioPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      paused: true
    }
    this.togglePaused = this.togglePaused.bind(this);
  }


   componentDidMount(){
   }

   togglePaused() {
     const currentPaused = this.state.paused;
     this.setState({paused: !currentPaused});
   }

  render(){
    return (
      <div id="SideBarAudioPlayer" style={{zIndex: 100}}
      className="elevatedCard bg-primary text-white justify-content-between">
          <div
            style={{padding:"1.5% 2%", width: "25%", textAlign: "left", display: "flex"}}>
              {this.props.currentEpisode.icon ?
                <img className="audioPlayer-icon" style={{width: "4rem", height: "4rem", marginRight: "10px"}} src={ urlPrefix.pics.episodes + this.props.currentEpisode.icon}/>
                : null}
              <h5 id="audioPlayer-title" style={{alignSelf: "center"}}>{this.props.currentEpisode.title ? this.props.currentEpisode.title : "No Episode Selected"}</h5>
          </div>
          <div style={{width: "75%", padding:"1.5% 5%", textAlign: "center"}} >
            <div id="audio-player-controls">
              <div onClick={() =>changeAudioBySeconds('rewind', 30)} style={{display: "inline"}}>
                  <img src="/pics/audio-rewind-btn.png"/>
              </div>
              <div onClick={() => {
                  this.togglePaused();
                  playAudio();
              }} style={{display: "inline"}}>
                <img src={"/pics/" + (!this.state.paused ? "audio-pause-btn.png" : "audio-play-btn.png")}/>
              </div>
              <div onClick={() =>changeAudioBySeconds('rewind', 30)} style={{display: "inline"}}>
                <img src="/pics/audio-fastforward-btn.png"/>
            </div>
            <div style={{display: "block", width: "100%", backgroundColor: '#ddd', height: "3px", borderRadius: "70%"}}>
              <div id="audioTimeProgressBar" style={{backgroundColor: "black", height: "100%", width:"0%"}}>
              </div>
            </div>
            </div>
          <audio id="audioPlayer"
                  onTimeUpdate={updateAudioTime}
                  onDurationChange={() => this.setState({paused: false})}
                  className="w-100" >
              <source id="audioPlayer-source-mp3" type="audio/mp3"></source>
              Your browser does not support the audio element.
              Use Chrome
            </audio>
          </div>
      </div>

    )
}
}

const mapState = state => ({
  currentEpisode: state.currentEpisode
}
)

export default connect(mapState)(SideBarAudioPlayer)
