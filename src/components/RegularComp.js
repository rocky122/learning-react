import React, { Component } from "react";

class RegularComp extends Component {
  render() {
    const { name } = this.props;
    console.log(`Regular Component render ******`);
    console.log('I will always be re-rendered when there is change in the state of my parent');
    return (
      <div>
        <h1>This is the Regular Component</h1>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default RegularComp;
