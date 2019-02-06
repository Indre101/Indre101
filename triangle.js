let test = document.getElementById('firstLength');
let submitButton = document.getElementById('submitButton')


// function submitting() {
//   document.getElementById('myForm').submit();
// };


function myJsFunction() {
  let text = document.getElementById('input1').value;
  //console.log(text);
  return text;
}

function myJsFunctionTwo() {
  let text1 = document.getElementById('input2').value;
  //console.log(text1);
  return text1;
}

function calculateTriange() {
  let gf = myJsFunction() * myJsFunctionTwo();
  //console.log(gf);
  return gf
}

let labas = document.getElementById('labas');

let ansverButton = document.getElementById('submitButton');


ansverButton.onclick = function () {

  labas.innerHTML = calculateTriange();

}