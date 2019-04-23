const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c stands for context
let c = canvas.getContext("2d");

// c.fillRect(x,y, width, height)

c.fillRect(100, 100, 100, 150);
c.fillRect(500, 100, 100, 150);
c.fillRect(300, 400, 100, 150);