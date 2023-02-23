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

  return raw + secret + algo
}