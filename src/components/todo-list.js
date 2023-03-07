import React from "react";

import TodoListItem from "./todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, ondelete, onCheck }) => {
  return (
    <ul className="list-group todo-list">
      {todos.map((elem) => (
        <li key={elem.id} className="list-group-item">
          <TodoListItem ondelete={ondelete} onCheck={onCheck} todo={elem} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
