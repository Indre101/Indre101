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

// soul Bass

// slder effect
const arrow = document.getElementById("arrow");
const styleTileBass = document.getElementById("styleTileBass");
const saulBassIMG = document.querySelectorAll(".saulBassIMG")

let i = -1;
let a = 0;

arrow.onclick = increase;

function increase() {

  a = a + 100


  saulBassIMG.forEach((e) => {

    moveUp(e, a)

    if (a === 600) {
      a = 0;
      e.style.transform = `translateY(-${a}%) `;

    }


  })

}

function moveUp(b, c) {

  b.style.transition = "0.5s";
  b.style.transform = `translateY(-${c}%) `;

}

// slider 

// arrow button behaviour

arrow.onmousedown = function () {

  buttonDown(arrow)

}

arrow.onmouseup = function () {
  buttonUp(arrow)
}

// function to move a button down


function buttonDown(btn) {

  btn.classList.add("moveUp")

}

function buttonUp(btn) {

  btn.classList.remove("moveUp")

}