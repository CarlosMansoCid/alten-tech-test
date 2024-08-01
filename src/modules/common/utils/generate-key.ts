import md5 from "md5";

export const generateKey = () => {
  const publickey = import.meta.env.VITE_PUBLIC_API_KEY;
  const privatekey = import.meta.env.VITE_PRIVATE_API_KEY;
  const ts = new Date().getTime();
  const stringToHash = ts + privatekey + publickey;
  const hash = md5(stringToHash);
  const key = `ts=${ts}&apikey=${publickey}&hash=${hash}`;
  return key;
};
