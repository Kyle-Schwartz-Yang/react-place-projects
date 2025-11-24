import css from "./TodosItem.module.css";

type TodosItemProps = {
  value: string;
  description: string;
  complete: boolean;
  id: number; // додаємо id, щоб можна було видаляти/редагувати
  onDelete: () => void;
  onToggle: () => void;
  onEditing: () => void;
};

export function TodosItem({
  value,
  description,
  complete,
  onDelete,
  onToggle,
  onEditing,
}: TodosItemProps) {
  return (
    <li className={`${css.item} ${complete ? css.completed : ""}`}>
      <label className={css.label}>
        <input
          type="checkbox"
          checked={complete}
          onChange={onToggle}
          className={css.checkbox}
        />

        <h2 className={`${css.title}`}>{value}</h2>
        {description && <p className={css.description}>{description}</p>}
      </label>

      <div className={css.body}>
        <div className={css.buttons}>
          <button type="button" className={css.edit} onClick={onEditing}>
            EDIT
          </button>
          <button type="button" className={css.delete} onClick={onDelete}>
            DELETE
          </button>
        </div>
      </div>
    </li>
  );
}
