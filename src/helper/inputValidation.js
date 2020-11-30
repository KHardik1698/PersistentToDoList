export const isStringEmpty = (string) => {
  return true;
};

export const isMarkup = (string) => {
  return true;
};

const Validator = [isStringEmpty, isMarkup];

export const isInputValid = (string) => {
  //   isStringEmpty(string);
  //   isMarkup(string);
  return isStringEmpty(string) && isMarkup(string);
  //   Validator.forEach((validator) => {
  //     validator(string);
  //   });
  //   return Validator.every((fun) => {
  //     return fun();
  //   });
};
