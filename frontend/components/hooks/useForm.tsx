import { useState, useEffect } from 'react';

const useForm = validate => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [query, setQuery] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      query.query();
    }
  }, [errors]);

  const handleSubmit = (event, query) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    setQuery({ query: query });
  };

  const handleChange = event => {
    event.persist();

    const { name, type, value } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;

    setValues(values => ({
      ...values,
      //[event.target.name]: event.target.value,
      [name]: val,
    }));
  };

  const resetValues = () => {
    setValues({});
  };

  return {
    handleChange,
    handleSubmit,
    resetValues,
    values,
    errors,
  };
};

export default useForm;
