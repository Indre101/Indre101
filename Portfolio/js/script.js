// canvas 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;





function drawStarts() {
  for (let index = 0; index < 100; index++) {
    let randomStar = Math.floor(Math.random() * 100);
    let randomWidth = Math.random() * 3;
    let randomHeight = Math.random() * 3;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    ctx.fillStyle = "white";
    ctx.fillRect(x, y, randomWidth, randomHeight)


  }
}
drawStarts()

setInterval(() => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  drawStarts()
}, 3000);