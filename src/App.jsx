import React from "react";
import {Synth, Loop, Transport} from "tone"

Transport.bpm.value = 120;

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      started: false
    };

    const synth = new Synth().toMaster();

    const loop = new Loop(function(time){
      synth.triggerAttackRelease("C2", "8n", time);
    }, "4n");

    loop.start("8n");

    Transport.start();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.started !== prevState.started) {
      if (!this.state.started) Transport.start()
      else Transport.stop();
    }
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>start/stop</button>
    );
  }

  handleClick() {
    this.setState({ started: !this.state.started });
  }
}
