const form = document.querySelectorAll("form");
const input = document.querySelectorAll(".input");
const btn = document.querySelectorAll(".btn");
console.log(form);
console.log(input);
console.log(btn);

form.forEach(submittingform);


form.forEach(prevent);

function prevent(form) {
  form.preventDefault();

}


function submittingform(form) {
  form.addEventListener("submit", createNewItem);


}



function createNewItem(element) {
  let newItem = document.createElement("li");
  newItem.textContent = input.forEach((e) => {
    console.log(e.value);
  })
  console.log(newItem);

}