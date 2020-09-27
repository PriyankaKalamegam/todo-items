import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  const { completed, id, title } = props.todo;
  //   render() {
  return (
    <div>
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button
          onClick={() => {
            props.deleteTodoProps(props.todo.id);
          }}
        >
          DELETE
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    </div>
  );
  // }
}

export default TodoItem;
