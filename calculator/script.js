const input = document.getElementById("input");
const numbers = document.querySelectorAll(".inputValues");
const plus = document.getElementById("plus");
const actions = document.querySelectorAll(".actions");


let values = [];

numbers.forEach(function (element) {
  element.addEventListener("click", addValue)
})

function addValue() {
  values.push(this.value);
  console.log(this.value);
  input.value = values.join("");

}
// arithmetics
actions.forEach(doingArithmetics)
console.log(actions);

function doingArithmetics(element) {

  element.addEventListener("click", arithmetics)
}

function arithmetics() {

  input.value = "";




}