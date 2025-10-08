const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  li.appendChild(span);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask) span.textContent = newTask;
  });
  li.appendChild(editBtn);

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");
  delBtn.addEventListener("click", () => li.remove());
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value = "";

  message.textContent = "Task added successfully!";
  setTimeout(() => (message.textContent = ""), 2000);
}




