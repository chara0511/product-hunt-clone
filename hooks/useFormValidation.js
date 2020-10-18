import React, { useEffect, useState } from "react";

export const useFormValidation = ({ initialState, validate, callback }) => {
  const [values, setValues] = useState(initialState);

  const [errors, setErrors] = useState({});

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        callback();
      }

      setSubmit(false);
    }
  }, []);

  const handleChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));

    setSubmit(true);
  };

  return {
    values,
    errors,
    submit,
    handleChange,
    handleSubmit,
  };
};
