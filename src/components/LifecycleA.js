import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rocky"
    };
    console.log("Lifecycle A constructor called");
  }
  // Second hook for mounting phase
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps called");
    return null;
  }
  // render is the third lifecycle hook for the mounting phase
  render() {
    console.log("Lifecycle A render method called!");
    return (
      <div>
        <h1>Lifecycle A render method called</h1>
        <LifecycleB />
      </div>
    );
  }
  //cdm method is the final method for the mounting phase
  //   to cause side effects it is the best place to do so
  componentDidMount() {
    console.log("Lifecycle A componentDidMount called....");
  }
}

export default LifecycleA;
