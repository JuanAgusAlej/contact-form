import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BtnSubmit } from '../components/BtnSubmit/BtnSubmit.jsx';
import { Input } from '../components/Input/Input.jsx';
import dbJSON from '../db/db.json';
import './styleGeneric.css';
import { addForm } from '../service/firebaseRequests';
import { useUserDataContex } from '../providers/UserProvider.jsx';

const FormPages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userData = useUserDataContex();
  const navigate = useNavigate();
  const [sendData, setSendData] = useState(false);
  const onSubmit = async (data) => {
    setSendData(true);
    await addForm(data, userData);
    navigate('/contact');
  };
  console.log(errors);
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
                {dbJSON.items.map((item, i) => {
                  switch (item.type) {
                    case 'submit':
                      return (
                        <BtnSubmit
                          item={item}
                          sendData={sendData}
                          errors={errors}
                          key={i}
                        />
                      );
                    default:
                      return (
                        <Input
                          item={item}
                          register={register}
                          errors={errors}
                          key={i}
                        />
                      );
                  }
                })}
              </div>
            </div>
          </form>
        </div>
    </>
  );
};

export default FormPages;
