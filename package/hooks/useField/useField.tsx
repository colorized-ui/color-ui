import { useState } from "react";

const useField = (type: string) => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    handleChange,
  };
};

export default useField;
