import { IconArchive, IconTrash } from "@tabler/icons";

const Todo = ({
  todo: { id, title, isDone },
  toggleCompleteTodo,
  toggleArchiveTodo,
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

      <span className="todo__id">{id}</span>

      <button
        title="Archive"
        className="todo__action"
        onClick={toggleArchiveTodo(id)}
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
