import { TodosList, TodosPanel, TodosBoard } from "@components/organisms";
import { useState } from "react";

type TodosArrayType = {
  id: number;
  value: string;
  description: string;
  isDone: boolean;
  isEditing: boolean;
};

export function TodosPage() {
  const [todos, setTodos] = useState<TodosArrayType[]>([
    {
      id: 2,
      value: "Задача",
      description: "Дуже гарний опис для задачі",
      isDone: false,
      isEditing: false,
    },
  ]);
  const [view, setView] = useState("list");

  const addTask = (value: string, description: string) => {
    const newTask: TodosArrayType = {
      id: Date.now(),
      value: value,
      description: description,
      isDone: false,
      isEditing: false,
    };

    setTodos((prev) => [...prev, newTask]);
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const onComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onEditing = (id: number) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  return (
    <>
      <section className="todos" style={{ paddingTop: "2rem" }}>
        <div className="todos__container">
          <TodosPanel addTask={addTask}></TodosPanel>
          <div className="filters">
            <button
              type="button"
              onClick={() => setView(view === "list" ? "board" : "list")}
            >
              Switch to {view === "list" ? "Board" : "List"} View
            </button>
          </div>

          {view === "list" ? (
            <TodosList
              todos={todos}
              onDelete={onDelete}
              onToggle={onComplete}
              onEditing={onEditing}
            ></TodosList>
          ) : (
            <TodosBoard todos={todos}></TodosBoard>
          )}
        </div>
      </section>
    </>
  );
}
