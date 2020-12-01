import { localArr } from "./localStorage.js";

export const updateStatus = (taskObject, li, completeTask) => {
  if (li.classList.contains("")) {
    li.classList.add("no-strike");
  } else if (li.classList.contains("strike")) {
    completeTask.innerHTML = "Complete";
    li.classList.remove("strike");
    li.classList.add("no-strike");
  } else {
    li.classList.remove("no-strike");
    li.classList.add("strike");
    completeTask.innerHTML = "Incomplete";
  }
  findById(taskObject.taskId);
  localArr[index].class = li.classList.value;
  localStorage.setItem("toDoListArr", JSON.stringify(localArr));
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
