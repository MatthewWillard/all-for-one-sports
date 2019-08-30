import React, { Component } from "react";
import NFL from './nfl.jpg';
import NHL from './nhl.jpg';
import ESPN from './espn.jpg';
import fs from './fs.png';

export default class HomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };


  render() {
   
    return (
      <span className="news_selector">
        <p>Click on Logos to get the Latest News</p>
        <a href="/nflnews">
<img border="0" alt="NFLNews" src={NFL} width="250" height="250"></img>
      </a>
      <a href="/nhlnews">
<img border="0" alt="nhl" src={NHL} width="250" height="250"></img>
      </a>
      <a href="/espn">
<img border="0" alt="espn" src={ESPN} width="250" height="250"></img>
      </a>
      </span>
    );      
  }
}
