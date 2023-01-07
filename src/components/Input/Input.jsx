import React, { useEffect, useState } from 'react';
import Label from '../Label/Label.jsx';
import './styleInput.css';

export const Input = ({ item, register, errors }) => {
  const [isEmail, setIsEmail] = useState(false);
  useEffect(() => {
    if (item.type === 'email') {
      setIsEmail({ value: /^\S+@\S+$/i, message: 'El e-mail no es valido' });
    }
  }, []);
  return (
    <div className={ errors?.[item.name]?.message ? ('validation text-start my-3  p-3 ') : ('text-start my-3  p-3 border') }>
      <div className="d-flex">
        <Label label={item.label} required={item.required} />
      </div>
      <input
        {...register(item.name, {
          required: {
            value: item.required,
            message: 'Este campo es requerido',
          },
          pattern: isEmail,
        })}
        type={item.type}
        className="form-control borderInput"
        id="validationCustom01"
      />
      <span className='text-danger text-small d-block mt-2'>
        {errors?.[item.name]?.message}
      </span>
    </div>
  );
};
