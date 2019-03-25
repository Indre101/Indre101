const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const listItems = document.querySelector("li");

// adding new items

button.addEventListener("click", newItemAdd);


listItems.addEventListener("click", strikingOut);

function strikingOut() {

  newItem.classList.toggle("strikeOut");
}


function newItemAdd() {

  const newItem = document.createElement("li");

  newItem.textContent = input.value;
  list.appendChild(newItem);



}

// adding new items




// listItems.forEach(strikingOut);

// function strikingOut(i) {

//   i.addEventListener("click", strikeOut);

// }

// function strikeOut() {

//   this.classList.toggle("strikeOut");

// }