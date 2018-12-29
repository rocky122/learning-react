import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  // When to use index as a key 
  // The items in the list do not have a unique id 
  // The list is a static list and will not change 
  // The list will never be ordered or filtered 
  
  render() {
    // Approach 1 :  Using elemental conditionals

    // let message;
    // const { isLoggedIn } = this.state;
    // if (isLoggedIn) {
    //   message = <div>Welcome Rocky!</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <h1>{message}</h1>;
  
    // Approach 2 : Using ternary operator
  
    // return this.state.isLoggedIn ? (
    //   <h1>Welcome Prateek!</h1>
    // ) : (
    //   <h1>Welcome Guest!</h1>
    // );

    // Approach 3 : Using short circuit operator 
    return (
        this.state.isLoggedIn && (<h1>Welcome Rocky!</h1>)
    )
  }
}

export default UserGreeting;
