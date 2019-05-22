const color1 = document.getElementById("color");
const animal = document.getElementById("animal");
const btn1 = document.getElementById("submitButton");
const result1 = document.getElementById("result");
const btn2 = document.getElementById("reseting")


btn1.onclick = function () {

  if (color1.value == "" || animal.value == "") {
    result1.style.backgroundColor = "white";

    result1.textContent = "Please enter the required fields"
  } else {

    result1.style.backgroundColor = "white";
    result1.textContent = `Your spirit animal is ${color1.value} ${animal.value}`
    event.preventDefault()

  }
}


reseting.onclick = function () {
  result1.style.backgroundColor = "";
  result1.textContent = "";
}