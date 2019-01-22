import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2 onMouseOver={this.props.handleIncrement}>Hovered {this.props.counter} times</h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter,10);
