const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const timeInput = document.getElementById('timeInput');
const todoList = document.getElementById('todoList');
function createTodoItem(task, date, time) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = task;
  const details = document.createElement('span');
  details.className = 'todo-details';
  if (date || time) {
    details.textContent = 
      `${date ? date : ''}${date && time ? ', ' : ''}${time ? time : ''}`;
  }
  const actions = document.createElement('span');
  actions.className = 'todo-actions';
  const completeBtn = document.createElement('button');
  completeBtn.textContent = "✔";
  completeBtn.title = "Mark Completed";
  completeBtn.onclick = () => {
    span.classList.toggle('completed');
  };
  const editBtn = document.createElement('button');
  editBtn.textContent = "✎";
  editBtn.title = "Edit";
  editBtn.onclick = () => {
    taskInput.value = span.textContent;
    if (date) dateInput.value = date;
    if (time) timeInput.value = time;
    todoList.removeChild(li);
  };
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "🗑";
  deleteBtn.title = "Delete";
  deleteBtn.onclick = () => {
    todoList.removeChild(li);
  };
  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  if (date || time) li.appendChild(details);
  li.appendChild(actions);
  todoList.appendChild(li);
}
todoForm.onsubmit = e => {
  e.preventDefault();
  const task = taskInput.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;
  if (task) {
    createTodoItem(task, date, time);
    taskInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
  }
};


