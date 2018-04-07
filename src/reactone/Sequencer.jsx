import React from "react";
import Tone from "tone";
import produce from "immer"

export class Sequencer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sequences: [false, false, false, false, false, false, false, false],
    }

    this.synth = props.synth || new Tone.Synth().toMaster();

    this.sequence = new Tone.Sequence((time, note) => {
      if (note) this.synth.triggerAttackRelease(this.props.note, "8n");
    }, this.state.sequences, "8n").start();
  }

  componentDidUpdate() {
    this.state.sequences.forEach((tf, i) => {
      this.sequence.at(i, tf ? this.props.note : "");
    });
  }

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.state.sequences[0] ? "red" : "" }} onClick={() => this.handleClick(0)}>1</button>
        <button style={{ backgroundColor: this.state.sequences[1] ? "red" : "" }} onClick={() => this.handleClick(1)}>2</button>
        <button style={{ backgroundColor: this.state.sequences[2] ? "red" : "" }} onClick={() => this.handleClick(2)}>3</button>
        <button style={{ backgroundColor: this.state.sequences[3] ? "red" : "" }} onClick={() => this.handleClick(3)}>4</button>
        <button style={{ backgroundColor: this.state.sequences[4] ? "red" : "" }} onClick={() => this.handleClick(4)}>5</button>
        <button style={{ backgroundColor: this.state.sequences[5] ? "red" : "" }} onClick={() => this.handleClick(5)}>6</button>
        <button style={{ backgroundColor: this.state.sequences[6] ? "red" : "" }} onClick={() => this.handleClick(6)}>7</button>
        <button style={{ backgroundColor: this.state.sequences[7] ? "red" : "" }} onClick={() => this.handleClick(7)}>8</button>
      </div>
    );
  }

  handleClick(n) {
    this.setState(produce(this.state, draft => {
      draft.sequences[n] = !draft.sequences[n];
    }));
  }
}
