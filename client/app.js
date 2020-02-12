import React from 'react'

import {Navbar, SideBarAudioPlayer} from './components'
import Routes from './routes';
import {pageControls} from './utils/index';

const App = () => {
  return (
    <div style={{height: "100%"}}>
      <header style={{position: "fixed", width: "100vw", zIndex: "5"}}>
        <Navbar />
      </header>
      <main style={{position: "absolute", width: "100vw", height: "90%", top: "10%", zIndex: "2"}}>
        <div className={`${ window.outerWidth < pageControls.mediumScreenBreak ? '' : 'container'}
                        ${window.outerWidth < pageControls.mediumScreenBreak ? 'underBreak' : ''}
            `}>
          <section className="pageRight position-relative">
            <Routes />
          </section>
        </div>
      </main>
      <footer style={{position: "fixed", right: "0",bottom: "0px",left: "0", zIndex: 3 }}>
        <SideBarAudioPlayer />
      </footer>
    </div>
  )
}

export default App
