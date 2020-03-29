import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faWindowClose);

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
