import { formSubmission } from "./helper/formSubmission.js";
import { viewLocalStorage } from "./components/localStorage.js";

window.onload = () => {
  viewLocalStorage();
  document.forms.userInput.addEventListener("submit", formSubmission);
};
