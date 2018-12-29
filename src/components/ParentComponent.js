import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent"
    };
    this.bindEvents();
  }
  bindEvents() {
    this.greetParent = this.greetParent.bind(this);
  
 }
  greetParent(childName) {
      const { parentName } = this.state;
      alert(`Hello ${parentName} ! I am ${childName}`);
  }
  render() {
    return (
        <ChildComponent greetParent={this.greetParent}/>
    );
  }
}

export default ParentComponent;
