import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const FormSend = () => {
  return (
    <div
      className="containerBox"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        className="card-body text-start my-3 borderFormSend p-3 "
        style={{
          maxWidth: 640,
          margin: 12,
        }}>
        <h5 className="card-title text-center" style={{ fontSize: 38 }}>
          Información de contacto
        </h5>
        <p className="card-text mt-3">
          Gracias por enviar su información de contacto.
        </p>
        <Link to="/formInfo">Ver otros contactos</Link>
      </div>
    </div>
  );
};

export default FormSend;
