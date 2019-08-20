const canvas = document.querySelector("canvas");
const items = document.querySelectorAll(".itemColor");
const tools = document.querySelectorAll(".tool");


canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


const ctx = canvas.getContext("2d");









tools.forEach(t => {

  t.onclick = function () {

    tools.forEach(t => {

      t.style.backgroundColor = "blue";

    })



    this.style.backgroundColor = "red";



  }


})





// CLEAR CANVAS BUTTON;

document.getElementById("clearCanvas").onclick = function () {
  clearCanvas()
}

function clearCanvas() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}



// CHANGE COLOR OF STROKE
function colorChange() {

  items.forEach(i => {

    i.onclick = function () {

      let colorBG = window.getComputedStyle(this, null).getPropertyValue('background-color');
      ctx.fillStyle = colorBG
      ctx.strokeStyle = colorBG;

    }


  })
}

colorChange()

// FUNCTION TO DRAW


function arcDraw() {

  ctx.arc(mousePos.x, mousePos.y, 5, 0, Math.PI * 2, false)

}

function draw() {

  ctx.beginPath();



  arcDraw()
  ctx.fill();
  ctx.stroke();
}



// FUNCTION TO TRACK COORDINATES
function mouseCoordinates(e) {

  e = onmousedown || window.event;
  mousePos = {
    x: e.clientX,
    y: e.clientY
  };
  console.log("hjlk")
  draw()
}



// MOUSE EVENT HANDLERS
canvas.onmousedown = function () {

  canvas.addEventListener("mousemove", mouseCoordinates, false)

  canvas.onmouseup = function () {
    canvas.removeEventListener("mousemove", mouseCoordinates);
  }

}