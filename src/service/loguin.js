import { cipher } from '../helpers/crypto';

export const loguin = (user) => {
  const data = {
    id: user.uid,
    displayName: user.displayName,
    email: user.email,
  };
  return data;
};
