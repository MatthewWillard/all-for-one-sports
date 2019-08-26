import React, { Component } from 'react';
import NHLDisplay from './NHLDisplay'

class NHLnews extends Component {
  render() {
    return (
      <div className="app">
        <NHLDisplay />
      </div>
    );
  }
} 

export default NHLnews;