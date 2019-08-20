const canvas = document.querySelector("canvas");
const items = document.querySelectorAll(".itemColor");


canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


const ctx = canvas.getContext("2d");

// CLEAR CANVAS BUTTON;

document.getElementById("clearCanvas").onclick = function () {
  clearCanvas()
}

function clearCanvas() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function colorChange() {

  items.forEach(i => {

    i.onclick = function () {

      let colorBG = window.getComputedStyle(this, null).getPropertyValue('background-color');
      ctx.fillStyle = colorBG

    }


  })
}

colorChange()




function draw() {

  ctx.beginPath();
  ctx.fillRect(mousePos.x, mousePos.y, 5, 5)
  ctx.stroke();
}





function mouseCoordinates(e) {

  e = onmousedown || window.event;
  mousePos = {
    x: e.clientX,
    y: e.clientY
  };


  draw()


}






canvas.onmousedown = function () {

  canvas.addEventListener("mousemove", mouseCoordinates, false)

  canvas.onmouseup = function () {
    canvas.removeEventListener("mousemove", mouseCoordinates);
  }

}