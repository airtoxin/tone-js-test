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
          <div style={{display: "-webkit-box"}}>B4: <Sequencer note="B4"/></div>
          <div style={{display: "-webkit-box"}}>A4: <Sequencer note="A4"/></div>
          <div style={{display: "-webkit-box"}}>G4: <Sequencer note="G4"/></div>
          <div style={{display: "-webkit-box"}}>F4: <Sequencer note="F4"/></div>
          <div style={{display: "-webkit-box"}}>E4: <Sequencer note="E4"/></div>
          <div style={{display: "-webkit-box"}}>D4: <Sequencer note="D4"/></div>
          <div style={{display: "-webkit-box"}}>C4: <Sequencer note="C4"/></div>
          <div style={{display: "-webkit-box"}}>BD: <Sequencer note="C0"/></div>
        </Song>
      </div>
    );
  }
}
