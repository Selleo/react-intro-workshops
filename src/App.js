import { useState } from "react";

import { Todo } from "./components";

// Hi!

// We'll be creating a "Todo App", which is a well-known app type
// for learning basic concepts of web/mobile frameworks.

// We will go through slides and build the app together during the
// React intro workshops at Selleo.

const initialState = {
  todos: [
    { id: 1, title: "Learn ReactJS", isDone: false, isArchived: false },
    {
      id: 2,
      title: "Attend ReactJS workshops",
      isDone: true,
      isArchived: false,
    },
    { id: 3, title: "Learn Ruby on Rails", isDone: true, isArchived: false },
    {
      id: 4,
      title: "Attend Ruby on Rails workshops",
      isDone: true,
      isArchived: false,
    },
    {
      id: 5,
      title: "This one shouldn't be visible - archived",
      isDone: true,
      isArchived: true,
    },
  ],
};

const App = () => {
  const [todos, setTodos] = useState(initialState.todos);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(inputValue);
    setInputValue("");
  };

  const toggleCompleteTodo = (id) => () => {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];
    const isTodoDone = newTodos[targetTodoIndex].isDone;

    newTodos[targetTodoIndex].isDone = !isTodoDone;

    setTodos(newTodos);
  };

  const archiveTodo = (id) => () => {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];
    const isTodoArchived = newTodos[targetTodoIndex].isArchived;

    newTodos[targetTodoIndex].isArchived = !isTodoArchived;

    setTodos(newTodos);
  };

  const removeTodo = (id) => () => {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];

    newTodos.splice(targetTodoIndex, 1);

    setTodos(newTodos);
  };

  const todosList = todos
    .filter(({ isArchived }) => !isArchived)
    .map((todo) => (
      <Todo
        todo={todo}
        toggleCompleteTodo={toggleCompleteTodo}
        archiveTodo={archiveTodo}
        removeTodo={removeTodo}
      />
    ));

  const addTodo = (title) => {
    const newTodo = { title, isArchived: false, isDone: false };

    setTodos((oldTodos) => [newTodo, ...oldTodos]);
  };

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

      <ul className="todos__wrapper">{todosList}</ul>
    </div>
  );
};

export default App;
