import { deleteTaskElement } from "./deleteTask.js";
import { updateStatus } from "./updateStatus.js";

export const Task = (taskObject) => {
  const ul = document.getElementById("userList");
  const li = document.createElement("li");
  li.id = taskObject.taskId;
  li.innerHTML = taskObject.description;
  const completeTask = document.createElement("button");
  completeTask.innerHTML = "Complete";
  completeTask.id = "completeTask";
  const deleteTask = document.createElement("button");
  deleteTask.innerHTML = "Delete";
  deleteTask.id = "deleteTask";
  completeTask.addEventListener("click", () => {
    updateStatus(taskObject, li, completeTask);
  });
  deleteTask.addEventListener("click", () => {
    deleteTaskElement(li.id);
  });
  ul.appendChild(li);
  li.appendChild(completeTask);
  li.appendChild(deleteTask);
  return ul;
};

// taskObject = {
//   taskId: "unique id",
//   description: "",
// };
