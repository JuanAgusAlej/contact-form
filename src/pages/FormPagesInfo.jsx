import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import InformationCard from '../components/InformationCard/InformationCard.jsx';
import Loading from '../components/Loading/Loading.jsx';
import { getInfoForm } from '../service/firebaseRequests';

const FormPagesInfo = () => {
  const [infoForm, setInfoForm] = useState({
    datas: null,
    loading: true,
  });
  const getInfoDataForm = async () => {
    const datas = await getInfoForm();
    setInfoForm({ datas, loading: false });
  };
  useEffect(() => {
    getInfoDataForm();
  }, []);

  return (
    <>
      <h5 className="card-title text-center my-5 fs-1">
        Información de contacto
      </h5>
      {infoForm.loading ? (
        <Loading />
      ) : (
        <div className="row row-cols-md-5 g-3 mx-5 justify-content-center">
          {infoForm.datas.map((infoPerson) => (
            <InformationCard key={infoPerson.id} infoPerson={infoPerson} />
          ))}
        </div>
      )}
    </>
  );
};

export default FormPagesInfo;
