import React from 'react';
import Label from '../Label/Label.jsx';

const Check = ({ item, register, errors }) => {
  return (
    <div className={ errors?.[item.name]?.message ? ('validation text-start my-3  p-3 ') : ('text-start my-3  p-3 border') }>
      <div className="form-check d-flex align-items-baseline">
        <input
          className="form-check-input me-1"
          type={item.type}
          {...register(item.name, {
            required: {
              value: item.required,
              message: 'Este campo es requerido',
            },
          })}
        />
        <Label label={item.label} required={item.required} />
      </div>
      <span className="text-danger text-small d-block mt-2">
        {errors?.[item.name]?.message}
      </span>
    </div>
  );
};

export default Check;
