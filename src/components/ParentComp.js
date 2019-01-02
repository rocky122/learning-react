import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rocky"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Rocky" });
    }, 2000);
  }

  render() {
    const { name } = this.state;
    console.log(`Parent Component render method ****`);
    return (
      <div>
        <MemoComp name={name}/>
        {/* <RegularComp name={name} />
        <PureComp name={name} /> */}
      </div>
    );
  }
}

export default ParentComp;
