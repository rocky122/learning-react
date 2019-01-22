import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
  
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.props.handleIncrement}>Clicked {this.props.counter} times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter,5);
