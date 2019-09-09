import React from 'react'
import {connect} from 'react-redux'
import {TimelineMax, CSSPlugin, TweenMax, TimelineLite} from 'gsap'

class SideBarAudioPlayer extends React.Component {
  constructor(props){
    super(props);
    this.musicPlayer = React.createRef();
    this.timeLine = null;
    this.tween = new TweenMax("#audioPlayer-title", {paused: true, onStart: () => console.log("Tween go")}, {y: 200})

    this.state = {
      clicked: false
    }
  }

   componentDidMount(){
   }

 animate(){
   //setTimeout(() => this.timeLine.seek(2.5), 1000);
 }

 render(){
  return (
    <div id="SideBarAudioPlayer" style={{zIndex: 100}}
     ref={(div)=> this.musicPlayer = div}
     onClick={() => this.animate()}
    className="elevatedCard">
        <div
          style={{padding:".5em", textAlign: "center"}}>
            <h5 id="audioPlayer-title">{"No Episode Selected"}</h5>
        </div>
        <hr style={{marginBottom: ".1em", marginTop: ".1em"}}/>
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
}

const mapState = state => ({
  currentEpisode: state.currentEpisode
}
)

export default connect(mapState)(SideBarAudioPlayer)
