import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const addForm = async (formValue) => {
  try {
    await addDoc(collection(db, 'formData'), formValue);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

export const getInfoForm = async () => {
  const querySnapshot = await getDocs(collection(db, 'formData'));
  const data = [];
  querySnapshot.forEach((doc) => {
    const info = doc.data();
    info.id = doc.id;
    data.push(info);
  });
  return data;
};
