import React, { PureComponent } from "react";

// use rpce
class PureComp extends PureComponent {
  render() {
    const { name } = this.props;
    console.log(`Pure Component render method *******`);
    console.log(
      `I dont give a fuck even if the state of my parent changes I will not re-render at any cost`
    );
    return (
      <div>
        <h1>Pure Component</h1>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default PureComp;
