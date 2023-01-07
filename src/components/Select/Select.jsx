import React from 'react';
import Label from '../Label/Label.jsx';

const Select = ({ item, register, errors }) => {
  return (
    <div className={ errors?.[item.name]?.message ? ('validation text-start my-3  p-3 ') : ('text-start my-3  p-3 border') }>
      <Label label={item.label} required={item.required} />
      <select
        {...register(item.name, {
          required: {
            value: item.required,
            message: 'Este campo es requerido',
          },
        })}
        className="form-select"
        id="validationCustom04">
        <option selected disabled value="">
          Choose...
        </option>
        {item.options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="text-danger text-small d-block mt-2">
        {errors?.[item.name]?.message}
      </span>
    </div>
  );
};

export default Select;
