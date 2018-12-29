import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    //single source of truth for the form
    this.state = {
      username: "",
      comments: "",
      topic: "React"
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    const { username, comments, topic } = this.state;
    alert(`${username} ${comments} ${topic}`);
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            name="comments"
            value={comments}
            cols="30"
            rows="10"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select name="topic" value={topic} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Lifecycle methods 
// #Mounting - constructor, static getDerivedStateFromProps, render and componentDidMount
// #Updating - static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate
// #Unmounting - componentWillUnmount
// #Error Handling - static getDerivedStateFromError, componentDidCatch



export default Form;
