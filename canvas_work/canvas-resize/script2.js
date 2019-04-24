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