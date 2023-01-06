import React from 'react';
import Label from '../Label/Label.jsx';

const Check = ({ item, handleChange }) => {
  const click = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  return (
    <div className="border p-3 ">
      <div className="form-check d-flex align-items-baseline">
        <input
          className="form-check-input me-1"
          type={item.type}
          required={item.required}
                  onChange={(e) => handleChange(e)}
                  name={item.name}
        />
        <Label label={item.label} required={item.required} />
        <div className="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
  );
};

export default Check;
