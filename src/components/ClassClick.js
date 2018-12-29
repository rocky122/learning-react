import React, { Component } from "react";
class ClassClick extends Component {
  render() {
    const { runClassCode } = this.props;
    return (
      <div>
        <button onClick={runClassCode}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
