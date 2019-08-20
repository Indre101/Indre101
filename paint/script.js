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
  }

}


function drawRect(e) {

  e = onmousedown || window.event;
  mousePos = {
    x: e.clientX,
    y: e.clientY
  };

  ctx.beginPath();
  findButton()
  ctx.fill();
  ctx.stroke();


  // draw()
}



canvas.onmousedown = function () {
  canvas.addEventListener("mousemove", drawRect, false)
  canvas.onmouseup = function () {
    canvas.removeEventListener("mousemove", drawRect);
  }
}



// TEST CODE END

// function drawSmallCircle(e) {

//   e = onmousedown || window.event;
//   mousePos = {
//     x: e.clientX,
//     y: e.clientY
//   };


//   ctx.beginPath();
//   ctx.arc(mousePos.x, mousePos.y, 1, 0, Math.PI * 2, false)
//   ctx.fill();
//   ctx.stroke();


//   // draw()
// }

// tools.forEach(t => {

//   t.onclick = function () {

//     switch (this) {
//       case tools[0]:
//         canvas.onmousedown = function () {
//           canvas.addEventListener("mousemove", drawRect, false)
//           canvas.onmouseup = function () {
//             canvas.removeEventListener("mousemove", drawRect);
//           }
//         }
//         break;
//       case tools[1]:
//         canvas.onmousedown = function () {
//           canvas.addEventListener("mousemove", drawSmallCircle, false)
//           canvas.onmouseup = function () {
//             canvas.removeEventListener("mousemove", drawSmallCircle);
//           }
//         }
//         break;
//       default:
//         break;
//     }


//   }
// })




// MOUSE EVENT HANDLERS
// canvas.onmousedown = function () {

//   canvas.addEventListener("mousemove", mouseCoordinates, false)

//   canvas.onmouseup = function () {
//     canvas.removeEventListener("mousemove", mouseCoordinates);
//   }

// }