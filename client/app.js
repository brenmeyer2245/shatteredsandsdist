import React from 'react'

import {Navbar, MenuBar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="content_frame">
        <div className="pageLeft">
          <MenuBar />
        </div>
        <div className="pageRight">
          <Routes />
        </div>
      </div>
    </div>
  )
}

export default App
