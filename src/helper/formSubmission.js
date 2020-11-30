import { taskConstructor } from "./taskConstructor.js";
import { Task } from "../components/task.js";
import { isInputValid } from "./inputValidation.js";
import { toDoList } from "./toDoListData.js";
import {
  localArr,
  addLocalStorage,
  viewLocalStorage,
} from "../components/localStorage.js";

export const formSubmission = (event) => {
  event.preventDefault();
  //   const taskObject = new taskConstructor(
  //     document.forms.userInput.taskInput.value
  //   );
  const taskObject = new taskConstructor(
    event.target.taskInput.value,
    "no-strike"
  );
  if (isInputValid(event.target.taskInput.value)) {
    toDoList.push(taskObject);
    localArr.push(taskObject);
    Task(taskObject);
    event.target.taskInput.value = "";
    // console.log(toDoList);
    addLocalStorage(localArr);
  }
  // document
  //   .getElementById("userList")
  //   .appendChild(Task(new taskConstructor(event.target.taskInput.value)));
};
