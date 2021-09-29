export function getValueFromInput(idForm) {
  let value = "";
  if (document.getElementById(idForm)) {
    return document.getElementById(idForm).value;
  }
  return value;
}

export function isObjectValid(obj) {
  return Object.keys(obj).length > 0;
}
