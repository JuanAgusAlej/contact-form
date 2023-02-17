/* eslint-disable no-shadow */
import { async } from '@firebase/util';
import {
  addDoc,
  collection,
  getDocs,
  doc,
  getDocFromCache,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { cipher } from '../helpers/crypto';
import { db } from './firebase';

export const addForm = async (formValue, userData) => {
  const data = cipher(userData.id, formValue);
  console.log('dddddddddddddddddddddddddddddddddddddddd');
  console.log(data);
  try {
    await addDoc(collection(db, userData.displayName), data);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

export const getInfoForm = async (userData) => {
  console.log(userData);
  const querySnapshot = await getDocs(collection(db, userData.displayName));
  console.log(userData);
  const data = [];
  querySnapshot.forEach((doc) => {
    const info = doc.data();
    info.id = doc.id;
    data.push(info);
  });
  return data;
};
export const getInfoFormId = async (id, userData) => {
  const ref = doc(db, userData.displayName, id);
  try {
    const doc = await getDoc(ref);
    return doc.data();
  } catch (e) {
    console.log('Error getting cached document:', e);
  }
};

export const updateFormId = async (id, data, userData) => {
  const washingtonRef = doc(db, userData.displayName, id);

  // Set the "capital" field of the city 'DC'
  try {
    const resp = await updateDoc(washingtonRef, data);
    return resp;
  } catch (error) {
    return error;
  }
};
