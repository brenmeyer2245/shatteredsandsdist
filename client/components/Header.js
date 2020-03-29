import React from 'react'
import styled from 'styled-components'


const accessIFrame = function(){

  console.log('\n\n\n\n\n','[loaded]', '\n\n');
  var iframe = document.getElementById("mapFrame");
  var elmnt = iframe.contentWindow.document.getElementsByTagName("div")[0];
  console.log(elmnt);
  //elmnt.style.display = "none";  console.dir(mapFrame);

}



const Header = props => {
  return (
    // <div
    //   className="elevatedCard about"
    //   style={{
    //     backgroundImage: `url('/pics/book_background.jpg')`
    //   }}
    // >
    <div>
      <iframe id="mapFrame"
              height="400px" width="400px"
              src="https://azgaar.github.io/Fantasy-Map-Generator/"
              onLoad={accessIFrame}>
      </iframe>
    </div>

  )
}

// const HeaderContainer = styled.div`
// color: white;
// font-family: fantasy;
// text-align: center;
// margin-top: -1.3em;
// height: 52em;
// width: 40em;
// background-size: contain;
// `

export default Header
