import { localArr } from "./localStorage.js";

export const deleteTaskElement = (id) => {
  localArr.splice(findById(id), 1);
  localStorage.setItem("toDoListArr", JSON.stringify(localArr));
  document.getElementById(id).parentElement.remove();
};

let index;

export const findById = (id) => {
  localArr.filter((task) => {
    if (task.taskId == id) {
      index = localArr.indexOf(task);
    }
  });
  return index;
};
