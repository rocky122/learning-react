import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.bindEvents();
  }
  bindEvents() {
    this.greetMe = this.greetMe.bind(this);
  }
  greetMe() {
    this.setState({ message: "Hello!!" });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={this.greetMe}>click!</button>
      </div>
    );
  }
}

export default EventBind;
