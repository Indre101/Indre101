const result = document.getElementById("result")
const values = document.querySelectorAll(".values");

values.forEach((e) => {
  e.addEventListener("click", dis)
})



function dis() {
  result.value += this.value
}

//function that evaluates the digit and return result 
function solve() {

  let x = result.value
  let y = eval(x)
  result.value = y

}

//function that clear the display 
function clr() {
  result.value = ""
}