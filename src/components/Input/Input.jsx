import React from 'react';
import Label from '../Label/Label.jsx';
import './styleInput.css';

export const Input = ({ item, handleChange }) => {
    const prueba = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
  };
  return (
    <div className="text-start my-3 border p-3 ">
      <div className="d-flex">
        <Label label={item.label} required={item.required} />
      </div>
      <input
        onChange={(e) => handleChange(e)}
        type={item.type}
        className="form-control borderInput"
        name={item.name}
        id="validationCustom01"
        required={item.required}
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};
