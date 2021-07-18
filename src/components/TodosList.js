import Todo from "./Todo";

const TodosList = ({
  todos,
  toggleCompleteTodo,
  toggleArchiveTodo,
  removeTodo,
}) => {
  const todosList = todos
    .filter(({ isArchived }) => !isArchived)
    .map((todo) => (
      <Todo
        todo={todo}
        toggleCompleteTodo={toggleCompleteTodo}
        toggleArchiveTodo={toggleArchiveTodo}
        removeTodo={removeTodo}
      />
    ));

  return <ul className="todos__wrapper">{todosList}</ul>;
};

export default TodosList;
