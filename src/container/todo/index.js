import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAddTodo, filterTodo } from "../../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      completed: false,
      checkid: ""
    };
  }
  handleChange = (e, type, id) => {
    if (type === "check") {
      this.setState({ completed: !this.state.completed, checkid: id });
    }
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { setAddTodo } = this.props;
    if (name === "") {
      alert("Please Enter todo");
    }
    setAddTodo(name);
    this.setState({ name: "" });
  };
  deleteTodo = id => {
    this.props.filterTodo(id);
  };
  render() {
    let mapData = "";
    const { todos } = this.props;
    const { completed, checkid } = this.state;
    if (todos && todos.length > 0) {
      mapData = todos.map(data => {
        return (
          <>
            <input
              type="checkbox"
              name="check"
              value={this.state.check}
              onChange={e => this.handleChange(e, "check", data.id)}
            />
            <li
              key={data.id}
              style={{
                textDecoration:
                  completed && data.id === checkid ? "line-through" : "none"
              }}
            >
              {`Id : ${data.id}`}
              {`Name :${data.text}`}
            </li>
            <br />

            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => this.deleteTodo(data.id)}
            >
              Delete
            </button>
          </>
        );
      });
    }
    return (
      <div style={{ width: 500, margin: "auto" }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">name of todo </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
        <ul>{mapData}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.data
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setAddTodo,
      filterTodo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
