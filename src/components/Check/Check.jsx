import React from 'react';
import Label from '../Label/Label.jsx';

const Check = ({ item, handleChange }) => {
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
      </div>
    </div>
  );
};

export default Check;
