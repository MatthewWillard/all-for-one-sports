import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";



export default class HomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };


  render() {
   
    return (
      <div className="team_selector">
        <form>
          <label htmlFor="teamName">Select a team:    </label>
          <select id="teamName" name="country">
            <option value="None">Select one...</option>
            
          </select>
        </form>
      </div>
    );      
  }
}
