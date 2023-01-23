import React, { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUserDataToggleContex } from '../../providers/UserProvider.jsx';
import { close } from '../../service/closeSession';
import './style.css';

const Loguin = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const setUserData = useUserDataToggleContex();
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const table = user.email.split('@').shift();
      const data = {
        id: user.uid,
        displayName: user.displayName,
        email: user.email,
        table,
      };
      setUserData(data);
      navigate('contact');
    }
  });
  const register = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="loguin ">
      <div className="boxLoguin">
        <p>Agenda de contacto</p>
        <GoogleButton className='google' type="dark" onClick={register} />
      </div>
    </div>
  );
};

export default Loguin;
