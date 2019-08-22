const canvas = document.querySelector("canvas");
const items = document.querySelectorAll(".itemColor");
const tools = document.querySelectorAll(".tool");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

const ctx = canvas.getContext("2d");

// CLEAR CANVAS BUTTON;

document.getElementById("clearCanvas").onclick = function() {
  clearCanvas();
};

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// CHANGE COLOR OF STROKE
function colorChange() {
  items.forEach(i => {
    i.onclick = function() {
      let colorBG = window
        .getComputedStyle(this, null)
        .getPropertyValue("background-color");
      ctx.fillStyle = colorBG;
      ctx.strokeStyle = colorBG;
    };
  });
}

colorChange();

// FUNCTION TO DRAW

// FUNCTION TO TRACK COORDINATES

tools.forEach(t => {
  t.onclick = function() {
    tools.forEach(t => {
      t.style.backgroundColor = "white";
    });

    this.style.backgroundColor = "blue";
  };
});

let dw = 3;
let clickCount = 0;

function findButton() {
  if (
    window
      .getComputedStyle(tools[0], null)
      .getPropertyValue("background-color") === "rgb(0, 0, 255)"
  ) {
    ctx.rect(mousePos.x, mousePos.y, 1, 1);
  } else if (
    window
      .getComputedStyle(tools[1], null)
      .getPropertyValue("background-color") === "rgb(0, 0, 255)"
  ) {
    ctx.rect(mousePos.x, mousePos.y, 5, 5);
    ctx.fill();
  } else if (
    window
      .getComputedStyle(tools[2], null)
      .getPropertyValue("background-color") === "rgb(0, 0, 255)"
  ) {
    ctx.rect(mousePos.x, mousePos.y, 10, 10);
    ctx.fill();
  } else if (
    window
      .getComputedStyle(tools[3], null)
      .getPropertyValue("background-color") === "rgb(0, 0, 255)"
  ) {
    ctx.arc(mousePos.x, mousePos.y, 1, 0, Math.PI * 2, false);
    ctx.fill();
  } else if (
    window
      .getComputedStyle(tools[4], null)
      .getPropertyValue("background-color") === "rgb(0, 0, 255)"
  ) {
    ctx.arc(mousePos.x, mousePos.y, 3, 0, Math.PI * 2, false);
    ctx.fill();
  } else if (
    window
      .getComputedStyle(tools[5], null)
      .getPropertyValue("background-color") === "rgb(0, 0, 255)"
  ) {
    ctx.arc(mousePos.x, mousePos.y, 6, 0, Math.PI * 2, false);
    ctx.fill();
  } else if (
    window
      .getComputedStyle(tools[6], null)
      .getPropertyValue("background-color") === "rgb(0, 0, 255)"
  ) {
    drawLine(onmousedown);
    drawLineEnd(onmousemove);
    ctx.fill();
  } else if (
    window
      .getComputedStyle(tools[7], null)
      .getPropertyValue("background-color") === "rgb(0, 0, 255)"
  ) {
  } else if (
    window
      .getComputedStyle(tools[8], null)
      .getPropertyValue("background-color") === "rgb(0, 0, 255)"
  ) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    xArray.push(mousePos.x);
    yArray.push(mousePos.y);
    ctx.arc(xArray[0], yArray[0], dw, 0, Math.PI * 2, false);

    if (dw < 1) {
      dw = 1;
    } else if (mousePos.x > xArray[0] + dw || mousePos.y > yArray[0] + dw) {
      dw++;
    } else if (mousePos.x < xArray[0] + dw || mousePos.y < yArray[0] + dw) {
      dw--;
    } else if (mousePos.x < xArray[0] + dw || mousePos.y > yArray[0] + dw) {
      dw++;
    } else if (mousePos.x > xArray[0] + dw || mousePos.y < yArray[0] + dw) {
      dw--;
    }
  }
}

let xArray = [];
let yArray = [];

// REGULAr
function drawRect(e) {
  e = event || window.event;
  mousePos = {
    x: e.clientX,
    y: e.clientY
  };

  ctx.beginPath();
  findButton();
  ctx.stroke();
}

// DRAW LINE
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

// FIND COLOR
let firstColorArr = [];

let dx = 0;
let dy = 0;

function findColor(z, g, pixelDatas, pixelNew) {
  requestAnimationFrame(findColor);

  if (
    pixelNew[0] === pixelDatas[0] &&
    pixelNew[1] === pixelDatas[1] &&
    pixelNew[2] === pixelDatas[2] &&
    pixelNew[3] === pixelDatas[3]
  ) {
    z++;
    g++;
    pixelNew[0] = 120;
    pixelNew[1] = 120;
    pixelNew[2] = 120;
    pixelNew[3] = 120;

    console.log(z, g);

    // ctx.putImageData(pixelDataNew, dx, dy)
  } else if (dx > canvas.width || dy > canvas.height) {
    console.log("false");
    return false;
  }
}

document.querySelector(".fillAll").onclick = function() {
  canvas.onclick = function() {
    firstColorArr = [];

    e = event || window.event;
    mousePos = {
      x: e.clientX,
      y: e.clientY
    };

    let dx = mousePos.x;
    let dy = mousePos.y;

    let pixelData = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
    console.log(dx, dy);

    findColorBootomRight();
    function findColorBootomRight() {
      requestAnimationFrame(findColorBootomRight);

      let pixelDataParent = ctx.getImageData(dx, dy, 1, 1);
      let pixelDataNew = pixelDataParent.data;

      console.log("data Before" + pixelDataNew);
      do {
        dx++;
        dy++;
        pixelDataParent = ctx.getImageData(dx, dy, 1, 1);
        pixelDataNew = pixelDataParent.data;
        console.log("data After" + pixelDataNew);

        console.log(dx, dy);

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(dx, dy, 1, 1);
        ctx.stroke();

        return pixelDataNew;
      } while (
        pixelDataNew[0] === pixelData[0] &&
        pixelDataNew[1] === pixelData[1] &&
        pixelDataNew[2] === pixelData[2] &&
        pixelDataNew[3] === pixelData[3]
        // dx > 0 &&
        // dx < canvas.innerWidth &&
        // dy < canvas.innerHeight
      );
    }

    // BOTTOM LEFT
    // findColorBootomLeft();
    // function findColorBootomLeft() {
    //   requestAnimationFrame(findColorBootomLeft);
    //   pixelDataNew = ctx.getImageData(dx, dy, 1, 1).data;

    //   do {
    //     dx--;
    //     dy++;
    //     // pixelDataNew[0] = 120;
    //     // pixelDataNew[1] = 120;
    //     // pixelDataNew[2] = 120;
    //     // pixelDataNew[3] = 255;

    //     console.log(dx, dy, pixelDataNew);
    //     ctx.beginPath();
    //     ctx.fillStyle = "red";
    //     ctx.fillRect(dx, dy, 1, 1);
    //     ctx.stroke();
    //     // ctx.putImageData(pixelDataNew, dx, dy)
    //   } while (
    //     pixelDataNew[0] === pixelData[0] &&
    //     pixelDataNew[1] === pixelData[1] &&
    //     pixelDataNew[2] === pixelData[2] &&
    //     pixelDataNew[3] === pixelData[3] &&
    //     dx > 0 &&
    //     dx < canvas.innerWidth &&
    //     dy < canvas.innerHeight
    //   );
    // }
    //

    // TOP LEFT
    // findColorTopLeft();
    // function findColorTopLeft() {
    //   requestAnimationFrame(findColorTopLeft);
    //   pixelDataNew = ctx.getImageData(dx, dy, 1, 1).data;

    //   do {
    //     dx--;
    //     dy--;
    //     // pixelDataNew[0] = 120;
    //     // pixelDataNew[1] = 120;
    //     // pixelDataNew[2] = 120;
    //     // pixelDataNew[3] = 255;

    //     console.log(dx, dy, pixelDataNew);
    //     ctx.beginPath();
    //     ctx.fillStyle = "red";
    //     ctx.fillRect(dx, dy, 1, 1);
    //     ctx.stroke();
    //     // ctx.putImageData(pixelDataNew, dx, dy)
    //   } while (
    //     pixelDataNew[0] === pixelData[0] &&
    //     pixelDataNew[1] === pixelData[1] &&
    //     pixelDataNew[2] === pixelData[2] &&
    //     pixelDataNew[3] === pixelData[3] &&
    //     dx > 0 &&
    //     dx < canvas.innerWidth &&
    //     dy < canvas.innerHeight
    //   );
    // }

    // TOP Right
    // findColorTopRight();
    // function findColorTopRight() {
    //   requestAnimationFrame(findColorTopRight);
    //   pixelDataNew = ctx.getImageData(dx, dy, 1, 1).data;

    //   do {
    //     dx++;
    //     dy--;
    //     // pixelDataNew[0] = 120;
    //     // pixelDataNew[1] = 120;
    //     // pixelDataNew[2] = 120;
    //     // pixelDataNew[3] = 255;

    //     console.log(dx, dy, pixelDataNew);
    //     ctx.beginPath();
    //     ctx.fillStyle = "red";
    //     ctx.fillRect(dx, dy, 1, 1);
    //     ctx.stroke();
    //     // ctx.putImageData(pixelDataNew, dx, dy)
    //   } while (
    //     pixelDataNew[0] === pixelData[0] &&
    //     pixelDataNew[1] === pixelData[1] &&
    //     pixelDataNew[2] === pixelData[2] &&
    //     pixelDataNew[3] === pixelData[3] &&
    //     dx > 0 &&
    //     dx < canvas.innerWidth &&
    //     dy < canvas.innerHeight
    //   );
    // }
  };
};

// FUNCTION FOR DRAWING LINES
canvas.onmousedown = function() {
  canvas.addEventListener("mousemove", drawRect, false);
  canvas.onmouseup = function() {
    canvas.removeEventListener("mousemove", drawRect);
  };
};

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
