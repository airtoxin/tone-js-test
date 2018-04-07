import React from "react";
import {Synth, Loop, Transport} from "tone"
import {Song} from "./reactone/Song"
import {Sequencer} from "./reactone/Sequencer"

Transport.bpm.value = 120;

export class App extends React.Component {
  render() {
    return (
      <div>
        <Song>
          <Sequencer
            sequences={["C4", "E4", "G4", "A4"]}
          />
          <Sequencer
            sequences={["E4", "G4", "A4", "C4"]}
          />
        </Song>
      </div>
    );
  }
}
