const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", newItemAdd);

function newItemAdd() {

  const newItem = document.createElement("li");
  newItem.textContent = input.value;
  list.appendChild(newItem);

}