// canvas 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


window.onload = function () {
  menuItem.forEach((e) => {
    e.style.display = "none";

  })
}



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
const imageDisplay = document.getElementById("displayImagesSaulBassContainer")

let i = -1;
let a = 0;

saulBassIMG.forEach((e) => {

  e.onclick = function () {

    this.style.opacity = "0.5";
    imageDisplay.innerHTML = "";
    var cln = this.cloneNode(true);

    cln.style.transform = "translate(0,0)"
    cln.style.height = "50vh";
    cln.style.width = "50vw";
    cln.style.opacity = "1";

    cln.style.objectFit = "contain";
    // cln.style.boxShadow = " 2vh 2vh 2vh black";
    imageDisplay.appendChild(cln);

    imageDisplay.classList.add("displayImagesSaulBass");

  }

  e.onmouseout = function () {
    this.style.opacity = "1";

  }


})




const menuItem3 = document.getElementById("menuItemPortfolio");
const menuItem = document.querySelectorAll(".projectItem");

menuItem3.onmouseover = function () {


  menuItem3.style.transition = "1s";
  menuItem3.style.transform = "rotate(0deg) skewX(0deg) translate(0,0)";
  menuItem3.style.transformOrigin = "left";
  menuItem3.style.perspective = "10000px";


  menuItem.forEach((e) => {
    e.style.transition = "3s";
    e.style.display = "block";
    e.classList.add("projectItem1")

  })




}



menuItemPortfolio.onmouseout = function () {

  menuItem3.style.transform = "rotate(-30deg) skewX(25deg) translate(0, 0)";

  menuItem.forEach((e) => {
    e.style.display = "none";

  })

}

// arrow.onclick = increase;

// function increase() {

//   a = a + 100


//   saulBassIMG.forEach((e) => {

//     moveUp(e, a)

//     if (a === 500) {
//       a = 0;
//       e.style.transform = `translateY(-${a}%) `;

//     }

//   })

// }

// function moveUp(b, c) {

//   b.style.transition = "0.5s";
//   b.style.transform = `translateY(-${c}%) `;

// }

// // slider 

// // arrow button behaviour

// arrow.onmousedown = function () {

//   buttonDown(arrow)

// }

// arrow.onmouseup = function () {
//   buttonUp(arrow)
// }

// // function to move a button down


// function buttonDown(btn) {

//   btn.classList.add("moveUp")

// }

// function buttonUp(btn) {

//   btn.classList.remove("moveUp")

// }