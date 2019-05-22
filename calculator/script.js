const input1 = document.getElementById("input1");
const input = document.getElementById("input");
const valueNumbers = document.querySelectorAll(".inputValues");
const actionsMath = document.querySelectorAll(".act")


let valueArray = [];


valueNumbers.forEach((e) => {

  e.addEventListener("click", pushValue)

})

// displays numbers 

function clearTheField() {
  valueArray = []
  input1.textContent = "";

}

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
let finalValueArray = [];



function actionsOf() {

  caclculationValues.push(parseFloat(input1.innerHTML))

  let lastValue = finalValueArray[finalValueArray.length - 1]
  let lastValueOfSubmitted = caclculationValues[caclculationValues.length - 1]
  // let previousValue = finalValueArray[finalValueArray.length - 2]

  finalValueArray.push(parseFloat(input.innerHTML))
  console.log(finalValueArray);

  let bValue;



  if (finalValueArray.length < 3) {
    input.innerHTML = caclculationValues.reduce((accumulator, decantor) => {
      switch (this.innerHTML) {

        case "+":


          return accumulator + decantor
          break;
        case "-":
          return accumulator - decantor

          break;
        case "*":
          return accumulator * decantor

          break;
        case "/":
          return accumulator / decantor

          break;
      }
    })

  } else if (finalValueArray.length >= 3) {


    switch (this.innerHTML) {
      case "+":
        console.log("antras if");

        bValue = lastValue + lastValueOfSubmitted;
        console.log(bValue + "bValue")
        console.log(lastValue + "lastValue")
        console.log(lastValueOfSubmitted + "lastValueOfSubmitted")
        return bValue;
        break;
      case "-":
        bValue = lastValue - lastValueOfSubmitted;
        console.log(bValue + "bValue")
        console.log(lastValue + "lastValue")
        console.log(lastValueOfSubmitted + "lastValueOfSubmitted")
        return bValue;

        break;
      case "*":
        bValue = lastValue * lastValueOfSubmitted;
        console.log(bValue + "bValue")
        console.log(lastValue + "lastValue")
        console.log(lastValueOfSubmitted + "lastValueOfSubmitted")
        return bValue;
        break;
      case "/":
        bValue = lastValue / lastValueOfSubmitted;
        console.log(bValue + "bValue")
        console.log(lastValue + "lastValue")
        console.log(lastValueOfSubmitted + "lastValueOfSubmitted")
        return bValue;
        break;

    }

    input.innerHTML = bValue;


  }

}




// actions