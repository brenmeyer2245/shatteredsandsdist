export const playAudio = () => {
  const audio = document.getElementById('audioPlayer');

  if (audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
}

export const updateAudioTime = () => {
  const audio = document.getElementById('audioPlayer');
  $('#audioTimeProgressBar').css('width', (audio.currentTime / audio.duration) *100 + '%');
}


export const changeAudioBySeconds = (direction, amount) => {
  const audio = document.getElementById('audioPlayer');
  audio.currentTime += 30;
}
