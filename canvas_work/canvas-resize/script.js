const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c stands for context
let c = canvas.getContext("2d");

// c.fillRect(x,y, width, height)
c.fillStyle = "pink";
c.fillRect(100, 100, 100, 150);
c.fillStyle = "green"
c.fillRect(500, 100, 100, 150);
c.fillStyle = "yellow";
c.fillRect(300, 400, 100, 150);

// lines

c.beginPath();

// c.moveTo(x,y)

c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "blue";
c.stroke();

//arc


// c.arc(x:int, y:int, r:int, startAngle: Float32Array, endAngel:Float32Array, drawCountterClockwise:Boolean(false))
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "black";
c.stroke()

// creating 100 circles


for (let i = 0; i < 100; i++) {

  let r = Math.floor(Math.random() * 256)
  let a = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  let rValue = `rgb(${r},${a},${b})`
  console.log(rValue)

  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();

  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = rValue;
  c.stroke()
}