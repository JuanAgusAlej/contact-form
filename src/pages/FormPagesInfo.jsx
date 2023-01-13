import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InformationCard from '../components/InformationCard/InformationCard.jsx';
import Loading from '../components/Loading/Loading.jsx';
import { useUserDataContex } from '../providers/UserProvider.jsx';
import { close } from '../service/closeSession';
import { getInfoForm } from '../service/firebaseRequests';

const FormPagesInfo = () => {
  const userData = useUserDataContex();
  const navigate = useNavigate();
  const [infoForm, setInfoForm] = useState({
    datas: null,
    loading: true,
  });
  const getInfoDataForm = async () => {
    const datas = await getInfoForm();
    setInfoForm({ datas, loading: false });
  };
  const singOut = async () => {
    const result = await close();
    if (result) {
      navigate('/');
    }
  };
  useEffect(() => {
    console.log(userData);
    getInfoDataForm();
  }, []);

  return (
    <>
      <h5 className="card-title text-center my-5 fs-1">
        Usuario: {userData.displayName}
      </h5>
      <a className="btn btn-primary" onClick={singOut}>
        cerrar
      </a>
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
