import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";
import ActionSet from "./components/actions";

import "./index.css";

const App = () => {
  const [todos, setTodos] = React.useState([
    { done: true, label: "Drink Coffee", important: false, id: 1 },
    { done: false, label: "React Application", important: false, id: 2 },
    {
      done: false,
      label: "Make notes from your stud",
      important: false,
      id: 3,
    },
    { done: false, label: "Do not drink alchohol", important: false, id: 4 },
  ]);

  const [filter, setFilter] = React.useState("all");
  const [filteredSubstring, setFilteredSubstring] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const filterTodo = (filter_by) => {
    setFilter(filter_by);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const checkTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const searchTodo = (substring) => {
    filterTodo("filterBySubStr");
    setFilteredSubstring(substring);
  };

  const addTodo = (label) => {
    if (label.length <= 0) {
      setOpenModal(false);
      return;
    }
    const newTodo = {
      label,
      important: false,
      done: false,
      id: todos.length + 1,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setOpenModal(false);
  };

  return (
    <div className="todo-app">
      {openModal && <ActionSet add={addTodo} set={setOpenModal} />}
      <AppHeader
        toDo={todos.filter((elem) => elem.done === false).length}
        done={todos.filter((elem) => elem.done === true).length}
      />
      <div className="top-panel d-flex">
        <SearchPanel onSearch={searchTodo} />
        <ItemStatusFilter onFilter={filterTodo} filter={filter} />
      </div>
      {filter === "all" ? (
        <TodoList todos={todos} ondelete={deleteTodo} onCheck={checkTodo} />
      ) : filter === "active" ? (
        <TodoList
          todos={todos.filter((elem) => elem.done === false)}
          ondelete={deleteTodo}
          onCheck={checkTodo}
        />
      ) : filter === "done" ? (
        <TodoList
          todos={todos.filter((elem) => elem.done === true)}
          ondelete={deleteTodo}
          onCheck={checkTodo}
        />
      ) : (
        <TodoList
          todos={todos.filter((elem) =>
            elem.label.toLowerCase().includes(filteredSubstring.toLowerCase())
          )}
          ondelete={deleteTodo}
          onCheck={checkTodo}
        />
      )}
      <button
        type="add"
        className="btn btn-close"
        onClick={() => setOpenModal(true)}
      >
        New To Do
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
