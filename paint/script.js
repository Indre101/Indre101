const canvas = document.querySelector("canvas");
const items = document.querySelectorAll(".itemColor");
const tools = document.querySelectorAll(".tool");


canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


const ctx = canvas.getContext("2d");



// CLEAR CANVAS BUTTON;

document.getElementById("clearCanvas").onclick = function () {
  clearCanvas()
}

function clearCanvas() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}



// CHANGE COLOR OF STROKE
function colorChange() {

  items.forEach(i => {

    i.onclick = function () {

      let colorBG = window.getComputedStyle(this, null).getPropertyValue('background-color');
      ctx.fillStyle = colorBG
      ctx.strokeStyle = colorBG;

    }


  })
}

colorChange()

// FUNCTION TO DRAW

// FUNCTION TO TRACK COORDINATES


tools.forEach(t => {

  t.onclick = function () {

    tools.forEach(t => {
      t.style.backgroundColor = "white"
    })

    this.style.backgroundColor = "blue";


  }
})



function findButton() {

  if (window.getComputedStyle(tools[0], null).getPropertyValue('background-color') === "rgb(0, 0, 255)") {
    ctx.rect(mousePos.x, mousePos.y, 1, 1)

  } else if (window.getComputedStyle(tools[1], null).getPropertyValue('background-color') === "rgb(0, 0, 255)") {
    ctx.rect(mousePos.x, mousePos.y, 5, 5)

  } else if (window.getComputedStyle(tools[2], null).getPropertyValue('background-color') === "rgb(0, 0, 255)") {
    ctx.rect(mousePos.x, mousePos.y, 10, 10)

  } else if (window.getComputedStyle(tools[3], null).getPropertyValue('background-color') === "rgb(0, 0, 255)") {

    ctx.arc(mousePos.x, mousePos.y, 1, 0, Math.PI * 2, false)
  } else if (window.getComputedStyle(tools[4], null).getPropertyValue('background-color') === "rgb(0, 0, 255)") {

    ctx.arc(mousePos.x, mousePos.y, 3, 0, Math.PI * 2, false)
  } else if (window.getComputedStyle(tools[5], null).getPropertyValue('background-color') === "rgb(0, 0, 255)") {
    ctx.arc(mousePos.x, mousePos.y, 6, 0, Math.PI * 2, false)
  } else if (window.getComputedStyle(tools[6], null).getPropertyValue('background-color') === "rgb(0, 0, 255)") {

    drawLine(onmousedown)
    drawLineEnd(onmousemove)
  } else if (window.getComputedStyle(tools[7], null).getPropertyValue('background-color') === "rgb(0, 0, 255)") {



  } else if (window.getComputedStyle(tools[8], null).getPropertyValue('background-color') === "rgb(0, 0, 255)") {





  }


}


document.querySelector(".circle").onclick = function () {
  expandCircle()
}

function expandCircle() {

  requestAnimationFrame(expandCircle)

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let dW = 5;
  let dH = 5;


  canvas.onmousedown = function () {

    dW++;

    e = event || window.event;
    mousePos = {
      x: e.clientX,
      y: e.clientY
    };


    ctx.beginPath();
    ctx.arc(mousePos.x, mousePos.y, dW, 0, Math.PI * 2, false)
    ctx.fill();
    ctx.stroke();
    // dH++;


  }


}



// REGULAr
function drawRect(e) {

  e = event || window.event;
  mousePos = {
    x: e.clientX,
    y: e.clientY
  };

  ctx.beginPath();
  findButton()
  ctx.fill();
  ctx.stroke();

}



// Draw line
function drawLine(e) {

  e = event || window.event;
  mousePos = {
    x: e.clientX,
    y: e.clientY
  };

  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);



}

function drawLineEnd(e) {


  e = event || window.event;
  mousePos = {
    x: e.clientX,
    y: e.clientY
  };

  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();


}




// document.querySelector(".line").onclick = function () {

//   canvas.onmousedown = function () {
//     canvas.addEventListener("mousedown", drawLine, false);
//     canvas.addEventListener("mousemove", drawLineEnd, false);




//     canvas.onmouseup = function () {
//       canvas.removeEventListener("mousedown", drawLine);
//       canvas.removeEventListener("mousemove", drawLineEnd);

//     }
//   }

// }







canvas.onmousedown = function () {
  canvas.addEventListener("mousemove", drawRect, false)
  canvas.onmouseup = function () {
    canvas.removeEventListener("mousemove", drawRect);
  }
}