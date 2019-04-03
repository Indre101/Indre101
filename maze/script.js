var img = new Image();

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  img.src = "maze.gif";
  return setInterval(draw, 10);
}


function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(img, 0, 0);
}