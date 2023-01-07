import React, { useState } from 'react';
import './btnStyle.css';

export const BtnSubmit = ({ item, sendData }) => {
  return (
    <>
      {!sendData ? (
        <div className="text-start my-3">
          <button className="btn btn-primary btnColor" type={item.type}>
            {item.label}
          </button>
        </div>
      ) : (
        <div className="text-start my-3">
          <button
            className="btn btn-primary btnColor"
            disabled
            type={item.type}>
            <div className="d-flex">
              <div id="fountainG_1" className="fountainG"></div>
              <div id="fountainG_2" className="fountainG"></div>
              <div id="fountainG_3" className="fountainG"></div>
            </div>
          </button>
        </div>
      )}
    </>
  );
};
