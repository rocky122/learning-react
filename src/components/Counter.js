import React, { Component } from "react";
class Counter extends Component {
  incrementCount = () => {
    this.props.onIncrementCount();
  };
  render() {
    const { count } = this.props;
    return (
      <div>
        {/* <h1>This is the counter component!</h1> */}
        <h1>Count : {count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
