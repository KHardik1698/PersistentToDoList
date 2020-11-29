import { formSubmission } from "./helper/formSubmission.js";

window.onload = () => {
  document.forms.userInput.addEventListener("submit", formSubmission);
};
