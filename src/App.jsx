import React from "react";
import Tone from "tone"
import {Song} from "./reactone/Song"
import {Sequencer} from "./reactone/Sequencer"

Tone.Transport.bpm.value = 120;

const bd = new Tone.MembraneSynth({
}).toMaster();

bd.portamento = 1;

export class App extends React.Component {
  render() {
    return (
      <div>
        <Song>
          <div style={{display: "-webkit-box"}}>B4: <Sequencer note="B4"/></div>
          <div style={{display: "-webkit-box"}}>A4: <Sequencer note="A4"/></div>
          <div style={{display: "-webkit-box"}}>G4: <Sequencer note="G4"/></div>
          <div style={{display: "-webkit-box"}}>F4: <Sequencer note="C7" synth={new Tone.PluckSynth({ dampening: 8000 }).toMaster()}/></div>
          <div style={{display: "-webkit-box"}}>E4: <Sequencer note="E4"/></div>
          <div style={{display: "-webkit-box"}}>D4: <Sequencer note="D4"/></div>
          <div style={{display: "-webkit-box"}}>C4: <Sequencer note="C4"/></div>
          <div style={{display: "-webkit-box"}}>BD: <Sequencer note="C0" synth={bd}/></div>
        </Song>
      </div>
    );
  }
}
