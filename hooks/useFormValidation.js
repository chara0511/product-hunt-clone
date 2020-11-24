import { useEffect, useState } from 'react';

export const useFormValidation = (initialState, validateFn, successFn) => {
  const [values, setValues] = useState(initialState);

  const [errors, setErrors] = useState({});

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        successFn();
      }

      setSubmit(false);
    }
  }, [errors]);

  const handleChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const handleBlur = () => {
    setErrors(validateFn(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateFn(values));

    setSubmit(true);
  };

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
