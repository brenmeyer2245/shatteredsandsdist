

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


export const splitSummaryToPages = function(summary, charactersPerPage){
  // console.log(summary, pageBreak)
   let sectionArray = [];
   let currentId = 0;
   while (currentId < summary.length){
     let end = currentId + charactersPerPage;
     //check if end is less than 445 characters out
     if (end >= summary.length) {
       end = summary.length - 1;
        //push substring of current to end
     } else {
       //find the nearest period or space to cut off at
       let searchIndex = end;
       while (searchIndex > currentId){
         if (summary[searchIndex] === ' ' ||summary[searchIndex] === '.' || summary[searchIndex] === '!' || summary[searchIndex] === '?'|| summary[searchIndex] === '\n') {
           end = searchIndex;
           break;
         }
         searchIndex--;
       }
     }
     sectionArray.push(summary.slice(currentId, end + 1));
     //update currentId
     currentId = end + 1
   }
   return sectionArray;
 }


 export const testSummary = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare quam viverra orci sagittis eu volutpat. Ut lectus arcu bibendum at varius vel pharetra vel. Massa eget egestas purus viverra. Vitae congue mauris rhoncus aenean. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Consequat interdum varius sit amet mattis vulputate enim. Tortor condimentum lacinia quis vel eros donec. Iaculis eu non diam phasellus. Ultrices in iaculis nunc sed augue lacus viverra vitae congue.

 Dui ut ornare lectus sit amet est placerat in egestas. Proin fermentum leo vel orci. Mauris nunc congue nisi vitae suscipit. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Accumsan in nisl nisi scelerisque eu. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Turpis in eu mi bibendum neque egestas. Mauris rhoncus aenean vel elit scelerisque mauris. Habitant morbi tristique senectus et netus et. Tellus pellentesque eu tincidunt tortor. Nisl condimentum id venenatis a condimentum.

 Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Blandit massa enim nec dui nunc mattis enim. Eu facilisis sed odio morbi quis. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Feugiat scelerisque varius morbi enim nunc faucibus. Pulvinar elementum integer enim neque volutpat ac. Ultrices in iaculis nunc sed. Enim tortor at auctor urna nunc. Consequat id porta nibh venenatis cras sed felis eget. Aliquet risus feugiat in ante metus dictum. Faucibus ornare suspendisse sed nisi. Viverra mauris in aliquam sem. Tristique risus nec feugiat in fermentum posuere. Neque laoreet suspendisse interdum consectetur libero. Vitae tortor condimentum lacinia quis vel eros donec ac. Ac felis donec et odio pellentesque. Et leo duis ut diam quam nulla porttitor. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Commodo odio aenean sed adipiscing.

 Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Sodales ut eu sem integer vitae. Vel risus commodo viverra maecenas accumsan lacus vel. Auctor eu augue ut lectus arcu bibendum at varius. Mauris pellentesque pulvinar pellentesque habitant. Enim ut tellus elementum sagittis vitae et. Blandit volutpat maecenas volutpat blandit aliquam. Enim nec dui nunc mattis enim ut tellus. Ut placerat orci nulla pellentesque dignissim. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Natoque penatibus et magnis dis parturient montes nascetur. Risus sed vulputate odio ut enim. Mus mauris vitae ultricies leo integer. Sem integer vitae justo eget magna. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.

 Tempus egestas sed sed risus pretium quam vulputate dignissim. Fermentum dui faucibus in ornare quam viverra orci. Elementum eu facilisis sed odio morbi quis commodo odio. At volutpat diam ut venenatis tellus in metus vulputate. Accumsan lacus vel facilisis volutpat est velit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. In arcu cursus euismod quis viverra. Risus commodo viverra maecenas accumsan lacus. Suspendisse faucibus interdum posuere lorem ipsum dolor. Tempor orci eu lobortis elementum nibh tellus molestie.`
