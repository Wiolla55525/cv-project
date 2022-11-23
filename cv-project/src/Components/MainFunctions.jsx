import { useState } from 'react';

export const useGeneralState = () => {
  const [generalState, setGeneralState] = useState({
    mainInfoValues: {}, 
    educationValues: [],
    experienceValues: [], 
  });

  const [formValues, setFormValues] = useState({
    current: false,
  });

  const handleDelete = (index, param) => {
    const newValues = [...generalState[param]];
    newValues.splice(index, 1);
    setGeneralState({ ...generalState, [param]: newValues });
  };

  const handleAdd = (param) => {
    setGeneralState({ ...generalState, [param]: [...generalState[param], formValues] });
    setFormValues({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCurrent = () => {
    setFormValues({ ...formValues, current: !formValues.current });
  };

  return { generalState, setGeneralState, handleDelete, handleAdd, formValues, handleChange, handleCurrent };
};
