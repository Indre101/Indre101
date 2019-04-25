const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let c = canvas.getContext("2d");

c.fillStyle = "blue";
c.fillRect(30, 50, 100, 100);

c.beginPath();
c.moveTo(100, 100);
c.strokeStyle = "red"
c.lineTo(400, 400);

c.strokeStyle = "yellow";
c.lineTo(600, 800);
c.stroke();


c.beginPath();
// c.arc(x:int, y:int, r:int, startAngle: Float32Array, endAngel:Float32Array, 
// drawCountterClockwise:Boolean(false))
c.strokeStyle = "red";
c.arc(500, 100, 50, 0, Math.PI * 2, true);
c.stroke();


function randomColor() {

  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  let newColor = `rgb(${r}, ${g}, ${b})`
  return newColor

}


for (let i = 0; i < 200; i++) {

  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  c.beginPath();
  c.strokeStyle = randomColor();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.stroke();

}