import { useState, useEffect } from "react";

import { groupBy } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { TodosList } from "./components";

import { getTodos, addTodo } from "./store/todos";

// Hi!

// We'll be creating a "Todo App", which is a well-known app type
// for learning basic concepts of web/mobile frameworks.

// We will go through slides and build the app together during the
// React intro workshops at Selleo.

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

  const toggleCompleteTodo = (id) => () => {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];
    const isTodoDone = newTodos[targetTodoIndex].isDone;

    newTodos[targetTodoIndex].isDone = !isTodoDone;

    // setTodos(newTodos);

    saveToLS("todos", newTodos);
  };

  const toggleArchiveTodo = (id) => () => {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];
    const isTodoArchived = newTodos[targetTodoIndex].isArchived;

    newTodos[targetTodoIndex].isArchived = !isTodoArchived;

    // setTodos(newTodos);

    saveToLS("todos", newTodos);
  };

  const removeTodo = (id) => () => {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];

    newTodos.splice(targetTodoIndex, 1);

    // setTodos(newTodos);

    saveToLS("todos", newTodos);
  };

  const groupTodoStrategy = (todo) =>
    todo.isArchived ? "archivedTodos" : "unarchivedTodos";

  const saveToLS = (key, value) => {
    const stringifiedValue = JSON.stringify(value);

    localStorage.setItem(key, stringifiedValue);
  };

  const getFromLS = (key) => {
    const dataFromLS = localStorage.getItem(key);

    if (!dataFromLS) {
      throw new Error("No data present in localStorage");
    }

    return JSON.parse(dataFromLS);
  };

  useEffect(() => {
    try {
      const todosFromLS = getFromLS("todos");

      // setTodos(todosFromLS);
    } catch (err) {
      console.log(err);
    }
  }, []);

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

      <TodosList
        todos={unarchivedTodos}
        toggleArchiveTodo={toggleArchiveTodo}
        toggleCompleteTodo={toggleCompleteTodo}
        removeTodo={removeTodo}
      />

      {!!archivedTodos.length && (
        <>
          <h2 className="main__heading">Archived Todos</h2>

          <TodosList
            variant="archived"
            todos={archivedTodos}
            toggleArchiveTodo={toggleArchiveTodo}
            toggleCompleteTodo={toggleCompleteTodo}
            removeTodo={removeTodo}
          />
        </>
      )}
    </div>
  );
};

export default App;
