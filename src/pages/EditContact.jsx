import React, { useEffect, useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { db } from '../service/firebase';
import { getInfoFormId } from '../service/firebaseRequests';
import { Input } from '../components/Input/Input.jsx';
import { BtnSubmit } from '../components/BtnSubmit/BtnSubmit.jsx';

const EditContact = () => {
  const { id } = useParams();
  console.log(id);
  const searchData = async () => {
    const data = await getInfoFormId(id);
    console.log(data);
  };
  useEffect(() => {
    searchData();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [sendData, setSendData] = useState(false);
  const onSubmit = async (data) => {
    setSendData(true);
    await updateDoc(data);
    navigate('/contact');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <form
          className="needs-validation"
          style={{
            maxWidth: 640,
            margin: 12,
          }}
          onSubmit={handleSubmit(onSubmit)}>
          <div className="container text-center">
            <div className="row justify-content-md-center border py-3">
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditContact;
