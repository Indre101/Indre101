const start = document.getElementById("start");
const stop = document.getElementById("stop");
const squares = document.querySelectorAll("div");
const hitsDisplay = document.getElementById("hit");
const missDisplay = document.getElementById("miss");


let hit = 0;
let miss = 0;

const colorArray = ["red", "blue", "green", "yellow", "orange", "black"];


//start button clicked

start.onclick = function () {

  setInterval(() => {
    // squares.forEach(keepCount);

    changeBackground();
  }, 1000);

  // changeBackground();
}


function changeBackground() {
  squares.forEach(keepCount);

}


stop.onclick = function () {
  clearInterval(changeBackground());
}

//function for changing colors

function keepCount(element) {
  element.style.backgroundColor = colorArray[Math.floor(Math.random() * (colorArray.length))];
  element.addEventListener("click", checkIfRed);

}

function checkIfRed() {

  if (this.style.backgroundColor == "red") {
    hit++
    console.log(hit);
    hitsDisplay.textContent = hit;

  } else {
    miss++
    console.log(miss);
    missDisplay.textContent = miss;
  }

}

// console.log(colorArray[Math.floor(Math.random() * (colorArray.length))]);