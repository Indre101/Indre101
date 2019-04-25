const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

function randomColor() {

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let newColor = `rgb(${r}, ${g}, ${b})`;
  return newColor

}


function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();

    c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    c.stroke();

  }

  this.update = function () {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      c.strokeStyle = randomColor();
      this.dx = -this.dx;
    } else if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      c.strokeStyle = randomColor();

      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}


let circleArray = [];

for (let index = 0; index < 200; index++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  let dx = (Math.random() - 0.5) + Math.random() * 6;
  let dy = (Math.random() - 0.5) + Math.random() * 6;
  let radius = 30;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}
// circleArray.push(circle1);
console.log(circleArray);



function animate() {

  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circleArray.forEach((e) => {
    e.draw()
    e.update();
  })

}

animate()