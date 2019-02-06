let text1 = document.getElementById('input1');
let text2 = document.getElementById('input2');
let text3 = document.getElementById('input3');
let naujasMygtukas = document.getElementById('theButtonToClear');
let labas = document.getElementById('labas');
let ansverButton = document.getElementById('submitButton');
let mistake = document.getElementById('printsOuterror');

function myJsFunction() {
  let firstWall = text1.value;
  let secondWall = text2.value;
  let thirdWall = text3.value;

  const totalOfThree = firstWall * secondWall * thirdWall;
  //console.log(text);
  return totalOfThree;
}


ansverButton.onclick = function () {

  labas.innerHTML = myJsFunction();

}

// clearing the form

const clearTheForm = () => {

  text1.value = '';
  text2.value = '';
  text3.value = '';

};

naujasMygtukas.onclick = function () {
  clearTheForm();
  // labas.innerHTML = myJsFunction();

};