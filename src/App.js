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
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

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
        <Form />
        <LifecycleA />
        <FragmentDemo />
        <Table />
        <ParentComp />
        {/* <RefsDemo/> */}
        <FocusInput />
        <FRParentInput />
        <PortalDemo />
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
        <ClickCounter/>
        <HoverCounter/>
      </div>
    );
  }
}

export default App;
