const AES = require('crypto-js/aes');
const CryptoJS = require('crypto-js');

const ciphertext = (data, id) => {
  return AES.encrypt(JSON.stringify(data), id).toString();
};

export const cipher = (id, data) => {
  console.log(data);
  const dataCipher = {
    email: ciphertext(data.email, id),
    full_name: ciphertext(data.full_name, id),
    phone: ciphertext(data.phone, id),
  };
  return dataCipher;
};

export const decrypt = (id, dataCipher) => {
  const bytes = AES.decrypt(dataCipher, id);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  console.log(decryptedData);
};
