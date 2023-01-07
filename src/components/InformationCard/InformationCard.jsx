import React from 'react';
import './style.css';

const InformationCard = ({ infoPerson }) => {
  return (
    <div className="col mx-2 ">
      <div className="card text-dark bg-light mb-3 infoCardBorder">
        <div className="card-header text-center infoCardBorderTitle py-3 fs-4 ">
          <strong>{infoPerson.full_name}</strong>
        </div>
        <ul className="list-group list-group-flush text-start infoCardBorderList">
          <li className="list-group-item">
            <div>
              <p>
                <strong>Correo:</strong>
              </p>
              <span className='fontSize'>{infoPerson.email}</span>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <p>
                <strong>Nacimiento:</strong>
              </p>
              <span className='fontSize'>{infoPerson.birth_date}</span>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <p>
                <strong>Pais:</strong>{' '}
              </p>
              <span className='fontSize'>{infoPerson.country_of_origin.toUpperCase()}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InformationCard;
