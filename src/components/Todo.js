import { IconArchive, IconTrash } from "@tabler/icons";
import { useDispatch } from "react-redux";

import * as todos from "store/todos";

const Todo = ({ todo: { id, title, isDone } }) => {
  const dispatch = useDispatch();

  const toggleCompleteTodo = () => dispatch(todos.toggleCompleteTodo(id));
  const toggleArchiveTodo = () => dispatch(todos.toggleArchiveTodo(id));
  const removeTodo = () => dispatch(todos.removeTodo(id));

  return (
    <li key={id} className={`todo ${isDone && "-done"}`}>
      <header
        className="todo__title"
        onClick={toggleCompleteTodo}
        role="button"
      >
        {title}
      </header>

      <span className="todo__id">{id}</span>

      <button
        title="Archive"
        className="todo__action"
        onClick={toggleArchiveTodo}
      >
        <IconArchive />
      </button>

      <button title="Remove" className="todo__action" onClick={removeTodo}>
        <IconTrash />
      </button>
    </li>
  );
};

export default Todo;
