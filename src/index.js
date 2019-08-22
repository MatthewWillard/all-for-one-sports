import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFootballBall, faListUl, faListOl, faPenAlt, faGlobeAmericas, faBookOpen, faComment, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import * as serviceWorker from './serviceWorker'
import App from './components/App/App'
import './index.css'

library.add(
  faFootballBall, // logo
  faListUl, // style: listicle
  faListOl, // style: howto
  faGlobeAmericas, // style: news
  faPenAlt, // style: interview
  faBookOpen, // style: story
  faComment,
  faQuoteLeft,
)

ReactDOM.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
