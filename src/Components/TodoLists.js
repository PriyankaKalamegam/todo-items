import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoLists extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          >
            {" "}
          </TodoItem>
        ))}
      </div>
    );
  }
}
export default TodoLists;
