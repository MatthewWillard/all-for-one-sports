import React, { Component } from "react";
import NFL from './nfl.jpg';
import FF from './ff.png';

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
        <p>Get your latest NFL and Fantasy Football News!</p>
        <a href="/nflnews">
<img border="0" alt="NFLNews" src={NFL} width="500" height="500"></img>
      </a>
      <a href="/nflnews">
<img border="0" alt="fantasyFootball" src={FF} width="500" height="500"></img>
      </a>
      </span>
    );      
  }
}
