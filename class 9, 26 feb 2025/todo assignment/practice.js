let addButton = document.getElementById("mainButton");
addButton.addEventListener("click", addTodo);
function addTodo(e) {
    let currentTarget = e.currentTarget;
    let currentNewTodo = currentTarget.previousElementSibling;
    let currentNewTodoValue = currentNewTodo.value;
    if(currentNewTodoValue === "") return;
    let newList = document.createElement("li");
    newList.innerHTML = `${currentNewTodoValue}
    <button onclick="removeTodo(this)">Remove</button>`;
    
    let parentList = document.getElementById("MainOl");
    parentList.appendChild(newList);
    currentNewTodo.value = "";
}