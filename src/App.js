// Hi!

// We'll be creating a "Todo App", which is a well-known app type
// for learning basic concepts of web/mobile frameworks.

// We will go through slides and build the app together during the
// React intro workshops at Selleo.

const todos = [
  { title: "Learn ReactJS", isDone: false, isArchived: false },
  { title: "Attend ReactJS workshops", isDone: true, isArchived: false },
  { title: "Learn Ruby on Rails", isDone: true, isArchived: false },
  { title: "Attend Ruby on Rails workshops", isDone: true, isArchived: false },
  {
    title: "This one shouldn't be visible - archived",
    isDone: true,
    isArchived: true,
  },
];

const App = () => {
  const todosList = todos
    .filter(({ isArchived }) => !isArchived)
    .map(({ title, isDone }) => (
      <li className={`todo ${isDone && "-done"}`}>{title}</li>
    ));

  return (
    <div className="main__wrapper">
      <h1 className="main__title">Todo App</h1>

      <p className="main__description">
        Here you can store all the things you need to complete
      </p>

      <form className="main__form-wrapper">
        <input
          type="text"
          className="main__form-input"
          placeholder="Do the dishes"
        />

        <button className="main__form-submit">Add Todo</button>
      </form>

      <ul className="todos__wrapper">{todosList}</ul>
    </div>
  );
};

export default App;
