import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcPlus } from 'react-icons/fc';
import { CgLogOut } from 'react-icons/cg';
import AccordinInfo from '../components/AccordinInfo/AccordinInfo.jsx';
import Loading from '../components/Loading/Loading.jsx';
import { useUserDataContex } from '../providers/UserProvider.jsx';
import { close } from '../service/closeSession';
import { getInfoForm } from '../service/firebaseRequests';
import { cipher, decrypt } from '../helpers/crypto';

const FormPagesInfo = () => {
  const userData = useUserDataContex();
  const navigate = useNavigate();
  const styleButton = { fontSize: 30 };
  const [infoForm, setInfoForm] = useState({
    datas: null,
    loading: true,
  });
  const getInfoDataForm = async () => {
    const datas = await getInfoForm(userData);
    setInfoForm({ datas, loading: false });
  };
  const singOut = async () => {
    const result = await close();
    if (result) {
      navigate('/');
    }
  };
  useEffect(() => {
    if (!userData) {
      navigate('/');
    }
    console.log(userData);
    // const prueba = 'hola mundo';
    // const data = cipher('123456', prueba);
    // decrypt('123456', data);
    getInfoDataForm();
  }, []);

  return (
    <div className="boxPageInfo col-6 offset-3">
      <h5 className="card-title text-center mt-5 fs-1">
        Contactos
      </h5>
      <div className="d-flex justify-content-between sticky-top">
        <button className="btn" onClick={singOut} style={styleButton}>
          <CgLogOut />
        </button>
        <Link to="/addContact" style={styleButton}>
          <FcPlus />
        </Link>
      </div>
      {infoForm.loading ? (
        <Loading />
      ) : (
        <div
          className="accordion accordion-flush mt-3"
          id="accordionFlushExample">
          {infoForm.datas.map((infoPerson) => (
            <AccordinInfo key={infoPerson.id} infoPerson={infoPerson} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FormPagesInfo;
