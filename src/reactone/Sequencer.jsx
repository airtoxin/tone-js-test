import React from "react";
import Tone from "tone";

export class Sequencer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sequences: props.sequences,
      current: null
    }

    this.synth = new Tone.Synth().toMaster();

    this.sequence = new Tone.Sequence((time, note) => {
      this.setState({ current: note });
    }, this.state.sequences, "4n").start();
  }

  render() {
    if (this.state.current) this.synth.triggerAttackRelease(this.state.current, "8n");
    return (
      <div>sequence: {this.state.current}</div>
    );
  }
}
