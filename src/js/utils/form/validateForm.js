import { emailReg } from "./regex";
//some regex expressions
export function validateNumberValue(value) {
  const regex = /^[0-9]{10}$/;
  return regex.test(value);
}

export function validateEmail(email){
  const re = emailReg;
  return re.test(String(email).toLowerCase());
}