const input1 = document.getElementById("input1");
const input = document.getElementById("input");
const valueNumbers = document.querySelectorAll(".inputValues");
const actionsMath = document.querySelectorAll(".act")
let valueArray = [];


valueNumbers.forEach((e) => {

  e.addEventListener("click", pushValue)

})

// displays numbers 

function pushValue() {

  valueArray.push(parseFloat(this.innerHTML));
  console.log(valueArray);
  input1.innerHTML = valueArray.join("");
}


// adding another numbers


actionsMath.forEach((f) => {

  f.addEventListener("click", actionsOf)


})


let caclculationValues = [];

function actionsOf() {
  valueArray = [];
  caclculationValues.push(parseFloat(input1.innerHTML))
  console.log("hjjk")
  input.innerHTML
  let a;
  caclculationValues.reduce((accumulator, currentValue) => {
    switch (this.innerHTML) {
      case "+":
        a = accumulator + currentValue;
        break;
      case "-":
        a = accumulator - currentValue;
        break;
      case "*":
        a = accumulator * currentValue;
        break;
      case "/":
        a = accumulator - currentValue;
        break;

    }
    console.log(a);

  })


}



// actions