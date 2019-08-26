import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFootballBall } from '@fortawesome/free-solid-svg-icons'
import * as serviceWorker from './serviceWorker'
import App from './components/App/App'
import './index.css'

library.add(
  faFootballBall, // logo
)

ReactDOM.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
