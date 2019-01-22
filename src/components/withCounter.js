import React from "react";

const withCounter = (OriginalComponent,incrementParam) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0
      };
      this.bindEvents();
    }
    bindEvents() {
      this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement(e) {
      e.preventDefault();
      this.setState(prevState => {
        return {
          counter: prevState.counter + incrementParam
        };
      });
    }
    render() {
      return <OriginalComponent counter={this.state.counter} handleIncrement={this.handleIncrement} name="Prateek" />;
    }
  }
  return NewComponent;
};

export default withCounter;
