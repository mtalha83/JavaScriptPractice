

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addTodo);
function addTodo(e){
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentInputValue = currentInput.value;
    if (currentInputValue === "") return;
    let newLi = document.createElement("li");
    newLi.innerHTML = `${currentInputValue}
            <button onclick="removeTodo(this)">Remove</button>`;

    let parentList = document.getElementById("orderList");
    parentList.appendChild(newLi);
    currentInput.value = "";
}
function removeTodo(currentElement){
    currentElement.parentElement.remove();
}

