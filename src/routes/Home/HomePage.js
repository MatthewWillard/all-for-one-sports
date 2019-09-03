import React, { Component } from "react";
import NFL from './nfl.jpg';
import NHL from './nhl.jpg';
import ESPN from './espn.jpg';
import '../../Display.css';

export default class HomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };


  render() {
   
    return (
      <div className="news_selector">
        <p className="intro">Keep up with the latest news in sports!</p>
        <a href="/nflnews">
<img border="0" alt="NFLNews" src={NFL} width="200" height="200"></img>
      </a>
      <a href="/nhlnews">
<img border="0" alt="nhl" src={NHL} width="200" height="200"></img>
      </a>
      <a href="/espn">
<img border="0" alt="espn" src={ESPN} width="200" height="200"></img>
      </a>
      </div>
    );      
  }
}
