import React, { useState } from 'react';
import { BtnSubmit } from '../components/BtnSubmit/BtnSubmit.jsx';
import Check from '../components/Check/Check.jsx';
import { Input } from '../components/Input/Input.jsx';
import Select from '../components/Select/Select.jsx';
import db from '../db/db.json';
import './styleGeneric.css';

const FormPages = () => {
  const [formValue, setFormValue] = useState({
    full_name: '',
    email: '',
    birth_date: '',
    country_of_origin: '',
    terms_and_conditions: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handleChange = (e) => {
    if (e.target.name === 'terms_and_conditions') {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <form
        className="needs-validation"
        style={{
          maxWidth: 640,
          margin: 12,
        }}
        noValidate
        onSubmit={(e) => handleSubmit(e)}>
        {db.items.map((item, i) => {
          switch (item.type) {
            case 'select':
              return <Select item={item} handleChange={handleChange} key={i} />;
            case 'checkbox':
              return <Check item={item} handleChange={handleChange} key={i} />;
            case 'submit':
              return <BtnSubmit item={item} key={i} />;

            default:
              return <Input item={item} handleChange={handleChange} key={i} />;
          }
        })}
      </form>
    </div>
  );
};

export default FormPages;
