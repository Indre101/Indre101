const start = document.getElementById("btn1");


function isClicked() {
  if (start.style.webkitTransition === "box-shadow 10px 10px 25px 20px hotpink") {
    start.innerHTML = "Start!";
  }
}
isClicked()