const input = document.getElementById("input");
const input1 = document.getElementById("input1");
const equality = document.getElementById("equality");
const numbers = document.querySelectorAll(".inputValues");
const plus = document.getElementById("plus");
const actions = document.querySelectorAll(".actions");
const actionclear = document.querySelector(".actionclear");



// clearing the fields
actionclear.addEventListener("click", clearFields);

function clearFields() {
  input.value = "";
  input1.value = "";
}

// 

// creating empty array with values

let values = [];

numbers.forEach(function (element) {
  element.addEventListener("click", addValue)
})

function addValue() {
  values.push(this.value);
  // input1.value = values.join("");
  input1.value = values.join("");





}
// 

let theValues = []



plus.onclick = function () {
  values = []
  theValues.push(parseInt(input1.value));

  let sum = theValues.reduce((acc, val) => {
    return acc + val;
  })

  input.value = sum;

}