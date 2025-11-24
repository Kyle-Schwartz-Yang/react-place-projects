import { useInput } from "@shared/hooks";
import css from "./TodosPanel.module.css";
import { useState } from "react";

type TodosPanelType = {
  addTask: (value: string, description: string) => void;
};

export function TodosPanel({ addTask }: TodosPanelType) {
  const [isOpen, setIsOpen] = useState(false);
  const input = useInput("");
  const textarea = useInput("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(input.value, textarea.value);
    input.onReset();
    textarea.onReset();
  };

  const [priority, setPriority] = useState("medium");

  const priorities = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  return (
    <>
      {isOpen ? (
        <form
          className={css.form}
          aria-label="Create a task"
          onSubmit={onSubmit}
        >
          <fieldset className={css.fieldset}>
            <legend className="visually-hidden">Create a new task</legend>

            <div className={css.row}>
              <div className={css.formGroup}>
                <label htmlFor="task-name" className="visually-hidden">
                  Task name
                </label>
                <input
                  className={css.input}
                  type="text"
                  id="task-name"
                  name="task_name"
                  value={input.value}
                  placeholder="Enter name a task"
                  required
                  onChange={input.onChange}
                />
              </div>

              <div className={css.formGroup}>
                <label htmlFor="task-description" className="visually-hidden">
                  Task description
                </label>
                <textarea
                  className={css.textarea}
                  id="task-description"
                  name="task_description"
                  placeholder="Enter description a task"
                  required
                  value={textarea.value}
                  onChange={textarea.onChange}
                ></textarea>
              </div>

              <div className="form-select">
                {priorities.label && (
                  <label htmlFor="customSelect" className="form-select__label">
                    {priorities.label}
                  </label>
                )}

                <select
                  id="customSelect"
                  className="form-select__control"
                  value={priorities.value}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  {priorities.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className={css.button}>
              Create
            </button>
            <button
              type="submit"
              className={css.button}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Cansel
            </button>
          </fieldset>
        </form>
      ) : (
        <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
          <span>+</span>Add task
        </button>
      )}
    </>
  );
}
