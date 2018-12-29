import React, { Component } from "react";

export default class Message extends Component {
  checkSubscriptionStatus = () => {
    const { status } = this.props;
    if (status) {
      if (status === "subscribed") {
        return <h1>You have successfully subscribed</h1>;
      }
      if (status === "not-subscribed") {
        return <h1>Subscribe Now !</h1>;
      }
    }
  };
  render() {
    const { onSubscribe, name, status } = this.props;
    return (
      <div>
        <h1>Welcome {name}</h1>
        {this.checkSubscriptionStatus()}
        <button onClick={onSubscribe}>
          {status === "subscribed" ? "Unsubscribe" : "Subscribe"}
        </button>
      </div>
    );
  }
}
