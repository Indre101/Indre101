let text1 = document.getElementById('input1');
let text2 = document.getElementById('input2');
let text3 = document.getElementById('input3');
let naujasMygtukas = document.getElementById('theButtonToClear');
let labas = document.getElementById('labas');
let ansverButton = document.getElementById('submitButton');
let mistake = document.getElementById('printsOuterror');

// trianlge function

function myJsFunction() {
  let firstWall = text1.value;
  let secondWall = text2.value;
  let thirdWall = text3.value;




  let a_sum = firstWall + secondWall;
  let b_sum = secondWall + thirdWall;
  let c_sum = thirdWall + firstWall;
  console.log(`${firstWall} ${secondWall} ${thirdWall} ${a_sum} ${b_sum} ${c_sum}`)

  // if (firstWall < 0 || secondWall < 0 || thirdWall < 0) {
  //   mistake.innerHTML = 'Please enter positive numbers';
  // } else if (thirdWall > a_sum || secondWall > c_sum || firstWall > b_sum) {

  //   mistake.innerHTML = 'The sum of the lengths of any 2 sides of a triangle must be greater than the third side';
  // } else {
  //   let a_kampas = (((firstWall ** 2 + secondWall ** 2 - thirdWall ** 2) / (2 * firstWall * secondWall)));
  //   let b_kampas = (((secondWall ** 2 + thirdWall ** 2 - firstWall ** 2) / (2 * secondWall * thirdWall)));
  //   let c_kampas = (((firstWall ** 2 + thirdWall ** 2 - secondWall ** 2) / (2 * firstWall * thirdWall)));
  //   console.log(a_kampas);
  // }





  //const totalOfThree = firstWall * secondWall * thirdWall;
  //console.log(text);
  //return totalOfThree;
}


ansverButton.onclick = function () {

  myJsFunction();

}



// clearing the form

const clearTheForm = () => {

  text1.value = '';
  text2.value = '';
  text3.value = '';
  mistake.innerHTML = '';

};

naujasMygtukas.onclick = function () {
  clearTheForm();
  // labas.innerHTML = myJsFunction();

};