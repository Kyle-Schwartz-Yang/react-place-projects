import css from "./TodosEdit.module.css";

export function TodosEdit() {
  return (
    <form className={css.form} aria-label="Create a task">
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
              placeholder="Enter name a task"
              required
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
            ></textarea>
          </div>
        </div>

        <button type="submit" className={css.button}>
          Create
        </button>
      </fieldset>
    </form>
  );
}
