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