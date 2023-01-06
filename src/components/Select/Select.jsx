import React from 'react';
import Label from '../Label/Label.jsx';

const Select = ({ item, handleChange }) => {
  const prueba = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };
  return (
    <div className="text-start my-3 border p-3">
      <Label label={item.label} required={item.required}/>
      <select onChange={(e) => handleChange(e)} name={item.name} className="form-select" id="validationCustom04" required>
        <option selected disabled value="">
          Choose...
        </option>
        {item.options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="invalid-feedback">Please select a valid state.</div>
    </div>
  );
};

export default Select;
