const input = document.getElementById("input");
const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");

const equality = document.getElementById("equality");
const numbers = document.querySelectorAll(".inputValues");
const actions = document.querySelectorAll(".actions")
const actionclear = document.querySelector(".actionclear");




// clearing the fields
actionclear.addEventListener("click", clearFields);



// 

let theValues = []
let inputArray = [];
let inputArray1 = [];
let inputArray2 = [];

function clearFields() {
  input.value = inputArray;
  input1.value = inputArray1;
  // input2.value = inputArray2;
}

let values = [];


actions.forEach(function (e) {

  e.addEventListener("click", addAction);
})


function addAction() {

  values = []
  theValues.push(parseFloat(input1.value));

  // let sum = theValues.reduce((acc, val) => {
  //   console.log("hk")
  //   return `${acc} ${this.value} ${val}`;
  // })








  // input2.value = sum;

  let sum1 = theValues.reduce((acc1, val1) => {
    let results = []


    console.log(results)

    switch (this.value) {

      case "+":

        resulting = acc1 + val1
        results.push(resulting);
        return resulting;
        break;
      case "-":
        resulting = acc1 - val1
        results.push(resulting);
        return resulting;

        break;
      case "*":
        resulting = acc1 * val1
        results.push(resulting);
        return resulting;

        break;
      case "/":
        resulting = acc1 / val1
        results.push(resulting);
        return resulting;

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