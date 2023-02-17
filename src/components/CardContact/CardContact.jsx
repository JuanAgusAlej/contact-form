import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CardContact = ({ infoPerson }) => {
  console.log(infoPerson);
  return (
    <>
      <div className="row p-3 justify-content-center">
        {!infoPerson.phone && !infoPerson.email ? (
          <Link to={`/editContact/${infoPerson.id}`} className="btn btn-secondary col-5">
            Agregar Informacion
          </Link>
        ) : (
          <>
            <div className="d-flex justify-content-end">
              <button className="btn btn-success p-0 mx-3">
                <FiEdit className="iconSize" />
              </button>
              <button className="btn btn-danger p-0 ">
                <MdDelete className="iconSize" />
              </button>
            </div>

            {infoPerson.email ? (
              <p className="card-text col-auto">Email: {infoPerson.email}</p>
            ) : (
              <></>
            )}
            {infoPerson.phone ? (
              <p className="card-text col-auto">Telefono: {infoPerson.phone}</p>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default CardContact;
