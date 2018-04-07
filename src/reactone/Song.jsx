import React from "react";
import {Loop, Transport} from "tone"

export class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: true
    };

    Transport.start();
  }

  componentWillUnmount() {
    this.loop.stop();
    Transport.stop();
  }

  componentDidUpdate() {
    if (this.state.started) Transport.start();
    else Transport.stop();
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
        <button onClick={() => this.handleClick()}>Start/Stop</button>
        {this.props.children}
      </div>
    );
  }

  handleClick() {
    this.setState({ started: !this.state.started });
  }
}
