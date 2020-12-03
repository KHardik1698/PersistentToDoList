import { toDoList } from "../helper/toDoListData.js";
import { deleteTaskElement } from "./deleteTask.js";
import { updateStatus } from "./updateStatus.js";

export let localArr = [];

export const addLocalStorage = (taskObject) => {
  localStorage.setItem("toDoListArr", JSON.stringify(localArr));
};

export const viewLocalStorage = (taskObject) => {
  let list = JSON.parse(localStorage.getItem("toDoListArr"));
  if (list !== null) {
    list.forEach((list) => {
      localArr.push(list);
    });
    addList(list);
  }
  return list;
};

export const addList = (list) => {
  const ul = document.getElementById("userList");
  list.forEach((list) => {
    const div = document.createElement("div");
    div.className = "task-container";
    const li = document.createElement("li");
    li.id = list.taskId;
    li.innerHTML = list.description;
    li.classList.add(list.class);
    const completeTask = document.createElement("button");
    if (list.class == "no-strike") completeTask.innerHTML = "Complete";
    else if (list.class == "strike") completeTask.innerHTML = "Incomplete";
    completeTask.id = "completeTask";
    const deleteTask = document.createElement("button");
    deleteTask.innerHTML = "Delete";
    deleteTask.id = "deleteTask";
    completeTask.addEventListener("click", () => {
      updateStatus(list, li, completeTask);
    });
    deleteTask.addEventListener("click", () => {
      deleteTaskElement(li.id);
    });
    ul.appendChild(div);
    div.appendChild(li);
    div.appendChild(completeTask);
    div.appendChild(deleteTask);
    return ul;
  });
  //   localStorage.clear();
};
