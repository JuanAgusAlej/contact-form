import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BtnSubmit } from '../components/BtnSubmit/BtnSubmit.jsx';
import Check from '../components/Check/Check.jsx';
import { Input } from '../components/Input/Input.jsx';
import Select from '../components/Select/Select.jsx';
import dbJSON from '../db/db.json';
import './styleGeneric.css';
import { addForm } from '../service/firebaseRequests';
import FormSend from '../components/FormSend/FormSend.jsx';

const FormPages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sendData, setSendData] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const onSubmit = async (data) => {
    setSendData(true);
    await addForm(data);
    setIsSend(true);
  };
  console.log(errors);
  return (
    <>
      {!isSend ? (
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
            {dbJSON.items.map((item, i) => {
              switch (item.type) {
                case 'select':
                  return <Select item={item} register={register} errors={errors} key={i} />;
                case 'checkbox':
                  return <Check item={item} register={register} errors={errors} key={i} />;
                case 'submit':
                  return <BtnSubmit item={item} sendData={sendData} errors={errors} key={i} />;

                default:
                  return <Input item={item} register={register} errors={errors} key={i} />;
              }
            })}
          </form>
        </div>
      ) : (
        <FormSend />
      )}
    </>
  );
};

export default FormPages;
