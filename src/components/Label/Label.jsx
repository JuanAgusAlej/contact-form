import React from 'react';
import './style.css';

const Label = ({ label, required }) => {
  return (
    <label className="form-check-label styleFont my-1" htmlFor="invalidCheck">
          {label}
          {required ? <span className='required'>*</span> : <span></span>}
    </label>
  );
};

export default Label;
