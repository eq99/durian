import CryptoJS from "crypto-js";


const digits = "0123456789";
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbol = "~!@#$%^&*()_+";

export interface Sample {
  digits: boolean;
  lower: boolean;
  upper: boolean;
  symbol: boolean;
}


export function genPassword(sample: Sample, len = 10) {
  let str = ""
  if (sample.digits) {
    str += digits;
  }
  if (sample.lower) {
    str += lower;
  }

  if (sample.upper) {
    str += upper;
  }

  if (sample.symbol) {
    str += symbol;
  }

  if (str.length === 0) {
    return "";
  }

  let res = "";
  for (let i = 0; i < len; i++) {
    res += str[Math.floor(Math.random() * str.length)]
  }

  return res;
}


export function encrypt(raw: string, secret: string, algo: string) {
  return encrypt_aes(raw, secret);
}

export function decrypt(hash: string, secret: string, algo: string) {
  return decrypt_aes(hash, secret);
}

export function encrypt_aes(raw: string, secret: string) {
  const message = CryptoJS.enc.Utf8.parse(raw);
  const secretPassphrase = CryptoJS.enc.Utf8.parse(CryptoJS.SHA256(secret).toString());
  // const iv = CryptoJS.enc.Utf8.parse('0123456789asdfgh');

  return CryptoJS.AES.encrypt(message, secretPassphrase, {
    mode: CryptoJS.mode.ECB,
    paddding: CryptoJS.pad.Pkcs7,
    // iv,
  }).ciphertext.toString().toUpperCase();
}

export function decrypt_aes(hash: string, secret: string) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(hash);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const secretPassphrase = CryptoJS.enc.Utf8.parse(CryptoJS.SHA256(secret).toString());
  // const iv = CryptoJS.enc.Utf8.parse('0123456789asdfgh');
  return CryptoJS.AES.decrypt(
    srcs,
    secretPassphrase,
    {
      mode: CryptoJS.mode.ECB,
      paddding: CryptoJS.pad.Pkcs7,
      // iv,
    }
  ).toString(CryptoJS.enc.Utf8)
}