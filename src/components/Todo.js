import { IconArchive, IconTrash } from "@tabler/icons";

const Todo = ({
  todo: { id, title, isDone },
  toggleCompleteTodo,
  archiveTodo,
  removeTodo,
}) => {
  return (
    <li key={id} className={`todo ${isDone && "-done"}`}>
      <header
        className="todo__title"
        onClick={toggleCompleteTodo(id)}
        role="button"
      >
        {title}
      </header>

      <button
        title="Archive"
        className="todo__action"
        onClick={archiveTodo(id)}
      >
        <IconArchive />
      </button>

      <button title="Remove" className="todo__action" onClick={removeTodo(id)}>
        <IconTrash />
      </button>
    </li>
  );
};

export default Todo;
