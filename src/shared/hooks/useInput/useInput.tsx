import { useState } from "react";

export function useInput<T extends HTMLInputElement | HTMLTextAreaElement>(
  initialState: string = ""
) {
  const [value, setValue] = useState(initialState);

  const onChange = (e: React.ChangeEvent<T>) => {
    setValue(e.target.value);
  };

  const onReset = () => {
    setValue(initialState);
  };

  return { value, onChange, onReset };
}
