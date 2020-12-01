export const isStringEmpty = (string) => {
  if (string.length == 0) {
    window.alert("Enter a Task");
    return false;
  } else return true;
};

const SpecialCharacters = [
  "$",
  "^",
  "`",
  "~",
  "_",
  "|",
  "{",
  "}",
  "[",
  "]",
  "<",
  ">",
];

export const isSpecialCharacter = (string) => {
  let result = true;
  SpecialCharacters.forEach((validator) => {
    if (string.includes(validator)) {
      result = false;
    }
  });
  if (result == false) {
    window.alert("Enter a Valid Input without Special Characters");
  }
  return result;
};

const Validator = [isStringEmpty, isSpecialCharacter];

export const isInputValid = (string) => {
  // return Validator.forEach((validator) => {
  //   return validator(string);
  // });
  return Validator.every((validator) => {
    return validator(string);
  });
};
