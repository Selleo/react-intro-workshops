import Todo from "./Todo";

const TodosList = ({ todos }) => {
  const todosList = todos.map((todo) => <Todo todo={todo} />);

  return <ul className="todos__wrapper">{todosList}</ul>;
};

export default TodosList;
