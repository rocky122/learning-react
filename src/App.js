import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import "./App.css";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import styles from "./components/appStyles.module.css";
import Form from "./components/Form";
class App extends Component {
  state = {
    status: "not-subscribed",
    count: 0,
    primary: false
  };

  onSubscribe = e => {
    e.preventDefault();
    const { status } = this.state;
    if (status === "subscribed") {
      this.setState({ status: "not-subscribed" });
    } else {
      this.setState({ status: "subscribed" });
    }
  };
  onIncrementCount = e => {
    e.preventDefault();
    this.setState(
      prevState => ({
        count: prevState.count + 1
      }),
      () => console.log("Increment works!")
    );
  };
  runCode = e => {
    e.preventDefault();
    console.log("The button was clicked!!");
  };
  runClassCode = e => {
    e.preventDefault();
    console.log("The button was clicked");
  };
  render() {
    const { count, status, primary } = this.state;
    return (
      <div className="App">
        <Welcome
          onSubscribe={this.onSubscribe}
          name="Prateek"
          status={status}
        />
        <Counter onIncrementCount={this.onIncrementCount} count={count} />
        <FunctionClick runCode={this.runCode} />
        <ClassClick runClassCode={this.runClassCode} />
        <EventBind />
        <ParentComponent />
        <UserGreeting />
        <NameList />
        <br />
        <Stylesheet primary={primary} />
        <Inline />
        {/* Using the css module stylesheet way */}
        <h1 className={styles.success}>Success</h1>
        <Form/>
      </div>
    );
  }
}

export default App;
