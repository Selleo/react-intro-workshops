import { useState } from "react";

import { groupBy } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { TodosList } from "components";

import { getTodos, addTodo } from "store/todos";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 10000);

    const newTodo = { id, title: inputValue, isArchived: false, isDone: false };

    dispatch(addTodo(newTodo));

    setInputValue("");
  };

  const groupTodoStrategy = (todo) =>
    todo.isArchived ? "archivedTodos" : "unarchivedTodos";

  const { archivedTodos = [], unarchivedTodos = [] } = groupBy(
    todos,
    groupTodoStrategy
  );

  return (
    <div className="main__wrapper">
      <h1 className="main__title">Todo App</h1>

      <p className="main__description">
        Here you can store all the things you need to complete
      </p>

      <form className="main__form-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          className="main__form-input"
          placeholder="Do the dishes"
          value={inputValue}
          onChange={handleInputChange}
        />

        <button className="main__form-submit">Add Todo</button>
      </form>

      <TodosList todos={unarchivedTodos} />

      {!!archivedTodos.length && (
        <>
          <h2 className="main__heading">Archived Todos</h2>

          <TodosList variant="archived" todos={archivedTodos} />
        </>
      )}
    </div>
  );
};

export default App;
