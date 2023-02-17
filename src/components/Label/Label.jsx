import React from 'react';
import './style.css';

const Label = ({ label, required, errors }) => {
  return (
    <label
    className={
      errors
        ? 'form-check-label styleFontValidation my-1'
        : 'form-check-label styleFont my-1'
    }
 htmlFor="invalidCheck">
          {label}
          {required ? <span className='required'>*</span> : <span></span>}
    </label>
  );
};

export default Label;
