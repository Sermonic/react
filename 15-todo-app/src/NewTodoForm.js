import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
    this.setState({ task: "" });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New ToDo: </label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;