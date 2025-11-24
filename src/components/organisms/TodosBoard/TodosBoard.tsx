import "./TodosBoard.css";

type TodosItemType = {
  id: number;
  value: string;
  description: string;
  isDone: boolean;
};

type TodosBoardType = {
  todos: TodosItemType[];
};

export function TodosBoard({ todos }: TodosBoardType) {
  return (
    <section className="todos-board" aria-label="Task board">
      <ul className="todos-board__list" role="list">
        {todos.map((todo) => (
          <li key={todo.id} className="todos-board__item" role="listitem">
            <article className="todo-card">
              <header className="todo-card__header">
                <h3 className="todo-card__title">{todo.value}</h3>
              </header>

              {todo.description && (
                <p className="todo-card__desc">{todo.description}</p>
              )}

              <footer className="todo-card__footer">switch color</footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
