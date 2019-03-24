

/**
 *
 * @param {*} url
 * @param {*} title
 * UpdateAudio takes in the url of an episode and the title of the Episode.
 * It finds the audioPlayer by its id tag,updates the Title and the Audio tag's src
 * Then it loads the new source and plays the audio
 */
export const updateAudio = (url, title) => {
  let audio = document.getElementById('audioPlayer');
  let source = document.getElementById('audioPlayer-source-mp3');
  document.getElementById('audioPlayer-title').innerHTML = title;
  source.src = url;
  audio.load();
  audio.play();
}
