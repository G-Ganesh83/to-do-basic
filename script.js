const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("add-task");
addBtn.addEventListener('click' , addTask);
taskInput.addEventListener('keypress',(e) =>{
  if(e.key === 'Enter') addTask();
});
function addTask(){
if(taskInput.value === "") return alert("Enter valid Input") ;
  addList(taskInput.value);
  taskInput.value ="";
}
function addList(task){
  const listElement = document.createElement("li");
  
  listElement.innerHTML = `<p>${task}</p><div class="edit"><button class="done">Done</button><button class="remove">Remove</button></div>`;
  taskList.appendChild(listElement);
}
taskList.addEventListener('click',(e) =>{
  if(e.target.classList.contains('done')){
    if(e.target.innerText === 'Undo') e.target.innerText = 'Done';
    else e.target.innerText = 'Undo';
    e.target.closest('li').classList.toggle("completed");
  }
  if(e.target.classList.contains('remove')){
    e.target.closest('li').remove();
  }
})