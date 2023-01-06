import React from 'react';
import './btnStyle.css';

export const BtnSubmit = ({ item }) => {
  return (
    <div className="text-start my-3">
      <button className="btn btn-primary btnColor" type={item.type}>
        {item.label}
      </button>
    </div>
  );
};
