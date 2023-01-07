import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCaJM11nkLxE28JeN5ApCTWK6hHIR4ot-0',
  authDomain: 'form-d3d1f.firebaseapp.com',
  projectId: 'form-d3d1f',
  storageBucket: 'form-d3d1f.appspot.com',
  messagingSenderId: '944438472430',
  appId: '1:944438472430:web:1276b6c1861639a9dd4dff',
};

const app = initializeApp(firebaseConfig);
export const { auth } = getAuth(app);
export const db = getFirestore(app);
