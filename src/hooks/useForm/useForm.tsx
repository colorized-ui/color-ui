import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});

  const handleSubmit = (event: any) => {
    event.preventDefault(), event();
  };

  const handleChange = (event: any) => {
    event.persists();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleReset = () => {};

  return [values, handleChange, handleSubmit, handleReset];
};

export default useForm;
