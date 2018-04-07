import React from "react";
import {Synth} from "tone"

export class App extends React.Component {
  render() {
    return (
      <button onClick={() => this.handleClick()}>Synth</button>
    );
  }

  handleClick() {
    var synth = new Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  }
}
