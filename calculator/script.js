const input = document.getElementById("input");
const numbers = document.querySelectorAll(".inputValues");

let values = [];

numbers.forEach(function (element) {
  element.addEventListener("click", addValue)
})

function addValue() {
  values.push(this.value);
  console.log(this.value);
  input.value = values.join("");

}