const start = document.getElementById("btn1");
const monster1 = document.getElementById("monster1");
const styleA = getComputedStyle(start);

start.onclick = function () {

  start.style.display = "none";
  monster1.style.display = "block";

}