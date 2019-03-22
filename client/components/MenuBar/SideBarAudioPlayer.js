import React from 'react'
import {connect} from 'react-redux'


const SideBarAudioPlayer = (props) => {
  return (
    <div id="SideBarAudioPlayer" className="elevatedCard">
        <div style={{padding:"1em"}}>
            <h5 id="audioPlayer-title">{"No Episode Selected"}</h5>
        </div>
        <hr />
        <div>
         <audio id="audioPlayer" style={{width: "15em", padding:"1em"}} controls>
            <source id="audioPlayer-source-mp3" type="audio/mp3"></source>
            Your browser does not support the audio element.
            Use Chrome
          </audio>
        </div>
    </div>

  )
}

const mapState = state => ({
  currentEpisode: state.currentEpisode
}
)

export default connect(mapState)(SideBarAudioPlayer)
