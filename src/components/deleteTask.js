import { localArr } from "./localStorage.js";

export const deleteTaskElement = (id) => {
  //   console.log("Getting the ID", findById(id));
  localArr.splice(findById(id), 1);
  localStorage.setItem("toDoListArr", JSON.stringify(localArr));
  document.getElementById(id).parentElement.remove();
};

let index;

export const findById = (id) => {
  // console.log("Local Array", localArr);
  localArr.filter((task) => {
    if (task.taskId == id) {
      //   console.log(localArr.indexOf(task));
      index = localArr.indexOf(task);
    }
  });
  return index;
};
