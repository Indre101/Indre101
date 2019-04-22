const input = document.getElementById("input");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const equality = document.getElementById("equality");
const numbers = document.querySelectorAll(".inputValues");
const actions = document.querySelectorAll(".actions")
const actionclear = document.querySelector(".actionclear");




// clearing the fields
actionclear.addEventListener("click", clearFields);

function clearFields() {
  input.value = "";
  input1.value = "";
}

// 

let theValues = []

let values = [];


actions.forEach(function (e) {

  e.addEventListener("click", addAction);
})


function addAction() {

  values = []
  theValues.push(parseFloat(input1.value));

  let sum = theValues.reduce((acc, val) => {
    return `${acc} ${this.value} ${val}`;
  })


  input2.value = sum;

  let sum1 = theValues.reduce((acc, val) => {

    switch (this.value) {
      case "+":
        return acc + val
        break;
      case "-":
        return acc - val
        break;
      case "*":
        return acc * val
        break;
      case "/":
        return acc / val
        break;
      case "=":
        input1.value = "";
        input.value = sum1;
        break;


    }
  })


  input.value = sum1;


}




// creating empty array with values

numbers.forEach(function (element) {
  element.addEventListener("click", addValue)
})

function addValue() {
  values.push(this.value);
  input1.value = values.join("");
}

// 