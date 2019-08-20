const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth * 0.50;
canvas.height = window.innerHeight * 0.50;

const ctx = canvas.getContext("2d");




function animate() {

  requestAnimationFrame(animate);
  ctx.beginPath();
  ctx.fillRect(mousePos.x, mousePos.y, 10, 10)
  ctx.stroke();
}

function stopDraw() {

  ctx.clearRect;

}



function mouseCoordinates(e) {

  e = onmousedown || window.event;
  mousePos = {
    x: e.clientX,
    y: e.clientY
  };

  console.log(mousePos.x, mousePos.y)
  animate()
}



canvas.addEventListener("mouseup", stopDraw, false)



canvas.onmousedown = function () {

  canvas.addEventListener("mousemove", mouseCoordinates, false)

  canvas.onmouseup = function () {
    canvas.removeEventListener("mousemove", mouseCoordinates);
  }




}