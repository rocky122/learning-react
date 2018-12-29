import React, { Component } from "react";
import Message from "./Message";

export default class Welcome extends Component {
  render() {
    const { onSubscribe, name, status } = this.props;
    return (
      <div>
        <Message onSubscribe={onSubscribe} name={name} status={status} />
      </div>
    );
  }
}
