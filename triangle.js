let text1 = document.getElementById('input1');
let text2 = document.getElementById('input2');
let text3 = document.getElementById('input3');
let naujasMygtukas = document.getElementById('theButtonToClear');
let labas = document.getElementById('labas');
let ansverButton = document.getElementById('submitButton');
let mistake = document.getElementById('printsOuterror');

// trianlge function

function myJsFunction() {
  let firstWall = parseInt(text1.value);
  let secondWall = parseInt(text2.value);
  let thirdWall = parseInt(text3.value);




  let a_sum = firstWall + secondWall;
  let b_sum = secondWall + thirdWall;
  let c_sum = thirdWall + firstWall;
  console.log(`${firstWall} ${secondWall} ${thirdWall} ${a_sum} ${b_sum} ${c_sum}`);

  let a_kampas = Math.acos((((firstWall ** 2 + secondWall ** 2 - thirdWall ** 2) / (2 * firstWall * secondWall))));
  let b_kampas = Math.acos((((secondWall ** 2 + thirdWall ** 2 - firstWall ** 2) / (2 * secondWall * thirdWall))));
  let c_kampas = Math.acos((((firstWall ** 2 + thirdWall ** 2 - secondWall ** 2) / (2 * firstWall * thirdWall))));
  console.log(a_kampas);

  let degree1 = Math.floor(a_kampas * 180 / Math.PI);
  let degree2 = Math.ceil(b_kampas * 180 / Math.PI);
  let degree3 = 180 - degree1 - degree2;

  //  console.log(degree1 + degree2 + degree3)


  if (firstWall <= 0 || secondWall <= 0 || thirdWall <= 0) {
    mistake.innerHTML = 'Please enter positive numbers';
  } else if (thirdWall >= a_sum || secondWall >= c_sum || firstWall >= b_sum) {

    mistake.innerHTML = 'The length of one side can not be equal to or more than the sum of other two';
  } else if (firstWall === secondWall || secondWall === thirdWall || thirdWall === firstWall) {
    degree1 = degree2
    degree3 = 180 - degree1 - degree2;
    mistake.innerHTML = `The corners are ${degree1}, ${degree2}, ${degree3} the triangle is Isosceles`
  } else if (degree1 === 90 || degree2 === 90 || degree3 === 90) {

    mistake.innerHTML = `The corners are ${degree1}, ${degree2}, ${degree3} the triangle is rectanlge`
  } else if (firstWall === secondWall && secondWall === thirdWall && thirdWall === firstWall) {
    degree1 = 60;
    degree2 = degree1;
    degree3 = degree2;

    mistake.innerHTML = `All the corners are 60 degree, cause the triangle is Equilateral `


  } else {
    mistake.innerHTML = `The corners are ${degree1}, ${degree2}, ${degree3} the triangle is not rectanlge`
  }
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