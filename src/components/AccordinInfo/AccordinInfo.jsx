import React from 'react';

const AccordinInfo = ({ infoPerson }) => {
  console.log(infoPerson);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-${infoPerson.id}`}
          aria-expanded="false"
          aria-controls={`flush-${infoPerson.id}`}>
          {infoPerson.full_name}
        </button>
      </h2>
      <div
        id={`flush-${infoPerson.id}`}
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> class. This is the first
          accordion body.
        </div>
      </div>
    </div>
  );
};

export default AccordinInfo;
