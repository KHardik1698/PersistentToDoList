import { localArr } from "./localStorage.js";

export const updateStatus = (taskObject, li, completeTask) => {
  //   li.classList.toggle(taskObject.class);
  //   li.classList.add(taskObject.class);
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
    // li.classList.remove(taskObject.class);
  }
  findById(taskObject.taskId);
  localArr[index].class = li.classList.value;
  console.log(localArr);
  localStorage.setItem("toDoListArr", JSON.stringify(localArr));
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
