import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";

export default class TeamPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  render() {
    return (
      <Section className="TeamPage">
        
      </Section>
    );
  }
}
