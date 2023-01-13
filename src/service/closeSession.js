import { getAuth, signOut } from 'firebase/auth';

export const close = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error('Fallo el cierre de sesion');
    return false;
  }
};
