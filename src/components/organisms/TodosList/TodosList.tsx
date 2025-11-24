import { TodosItem } from "@components/molecules/TodosItem/TodosItem";
import { TodosEdit } from "@components/molecules/TodosEdit/TodosEdit";

type TodosArrayType = {
  id: number;
  value: string;
  description: string;
  isDone: boolean;
  isEditing: boolean;
};

type TodoListType = {
  todos: TodosArrayType[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEditing: (id: number) => void;
};

export function TodosList({
  todos,
  onDelete,
  onToggle,
  onEditing,
}: TodoListType) {
  return (
    <>
      <ul>
        {todos.map((item) => {
          return item.isEditing ? (
            <TodosEdit></TodosEdit>
          ) : (
            <TodosItem
              key={item.id}
              id={item.id}
              value={item.value}
              description={item.description}
              complete={item.isDone}
              onToggle={() => onToggle(item.id)}
              onDelete={() => onDelete(item.id)}
              onEditing={() => onEditing(item.id)}
            ></TodosItem>
          );
        })}
      </ul>
    </>
  );
}
