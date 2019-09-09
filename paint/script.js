const canvas = document.querySelector("canvas");
const items = document.querySelectorAll(".itemColor");
const tools = document.querySelectorAll(".tool");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

const ctx = canvas.getContext("2d");

// CLEAR CANVAS BUTTON;

document.getElementById("clearCanvas").onclick = function () {
  clearCanvas();
};

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// CHANGE COLOR OF STROKE
function colorChange() {
  items.forEach(i => {
    i.onclick = function () {
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

// FUNCTION TO TRACK IF BUTTON IS CLICKED

function checkIfClicked() {
  tools.forEach(t => {
    t.onclick = function () {
      tools.forEach(t => {
        t.style.backgroundColor = "white";
      });
      document.querySelector(".form").classList.add("d-none");
      this.style.backgroundColor = "rgba(0, 8, 255, 0.52)";
    };
  });
}

checkIfClicked();

let dw = 3;
let clickCount = 0;

document.querySelector(".earase").onclick = function () {
  if (clickCount === 0) {
    clickCount++;

    tools.forEach(t => {
      tools.forEach(t => {
        t.style.backgroundColor = "white";
      });
    });

    document.querySelector(".form").classList.remove("d-none");
    document.querySelector(".earase").style.backgroundColor =
      "rgba(0, 8, 255, 0.52)";
  } else if (clickCount === 1) {
    // document.querySelector(".earase").style.backgroundColor = "white";
    document.querySelector(".form").classList.add("d-none");

    clickCount = 0;
  }
};

// FUNCTION TO FIND WHICH FUNCTION WILL BE SELECTED

function findButton(x, y) {
  if (
    window
    .getComputedStyle(tools[0], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    ctx.fillRect(x, y, 1, 1);
  } else if (
    window
    .getComputedStyle(tools[1], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    ctx.fillRect(x, y, 5, 5);
  } else if (
    window
    .getComputedStyle(tools[2], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    ctx.fillRect(x, y, 10, 10);
  } else if (
    window
    .getComputedStyle(tools[3], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    ctx.arc(x, y, 1, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
  } else if (
    window
    .getComputedStyle(tools[4], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    ctx.arc(x, y, 3, 0, Math.PI * 2, false);
    ctx.fill();
  } else if (
    window
    .getComputedStyle(tools[5], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    ctx.arc(x, y, 6, 0, Math.PI * 2, false);
    ctx.fill();
  } else if (
    window
    .getComputedStyle(tools[6], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    drawLine(onmousedown);
    drawLineEnd(onmousemove);
    ctx.fill();
  } else if (
    window
    .getComputedStyle(tools[7], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    // fillAll();
  } else if (
    window
    .getComputedStyle(tools[8], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    // clickCount++;

    ctx.clearRect(
      xArray[0] - dw,
      yArray[0] - dw,
      Math.pow(dw, 2) * Math.PI,
      Math.pow(dw, 2) * Math.PI
    );
    xArray.push(x);
    yArray.push(y);

    ctx.arc(xArray[0], yArray[0], dw, 0, Math.PI * 2, false);

    if (dw < 1) {
      dw = 1;
    } else if (x > xArray[0] + dw && y > yArray[0] + dw) {
      dw++;
    } else if (x < xArray[0] - dw && y > yArray[0] + dw) {
      dw++;
    } else if (x < xArray[0] - dw || y < yArray[0] - dw) {
      dw++;
    } else if (x > xArray[0] + dw || y < yArray[0] - dw) {
      dw++;
    } else {
      dw--;
    }
  } else if (
    window
    .getComputedStyle(tools[9], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {
    let size = document.getElementById("input").value;
    ctx.clearRect(x, y, size, size);
  } else if (
    window
    .getComputedStyle(tools[10], null)
    .getPropertyValue("background-color") === "rgba(0, 8, 255, 0.52)"
  ) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    let newSquareElement = new Square(dw)
    newSquareElement.squareDrawingBoundries()



  }
}


function Square(squareWidth) {

  this.squareWidth = squareWidth;
  this.event = "mousedown";
  this.x = function () {
    this.event || window.event;
    return {
      x: event.clientX
    };
  }
  this.y = function () {
    this.event || window.event;
    return {
      y: event.clientY
    };
  }
  this.squareDrawingBoundries = function () {

    xArray.push(this.x);
    yArray.push(this.y);

    console.log(xArray[0]);

    ctx.rect(xArray[0] - this.squareWidth / 2, yArray[0] - this.squareWidth / 2, this.squareWidth, this.squareWidth);

    if (this.squareWidth < 1) {
      this.squareWidth = 1;
    } else if (this.x > xArray[0] + this.squareWidth && this.y > yArray[0] + this.squareWidth) {
      this.squareWidth++;
    } else if (this.x < xArray[0] - this.squareWidth && this.y > yArray[0] + this.squareWidth) {
      this.squareWidth++;
    } else if (this.x < xArray[0] - this.squareWidth || this.y < yArray[0] - this.squareWidth) {
      this.squareWidth++;
    } else if (this.x > xArray[0] + this.squareWidth || this.y < yArray[0] - this.squareWidth) {
      this.squareWidth++;
    } else {
      this.squareWidth--;
    }

  }

}


let xArray = [];
let yArray = [];

// GET MOUSE POSTITIONS
function saveResizeAndRedisplay(scaleFactor) {
  // save the canvas content as imageURL
  var data = canvas.toDataURL();

  // resize the canvas
  canvas.width *= scaleFactor;
  canvas.height *= scaleFactor;

  // scale and redraw the canvas content
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
  };
  img.src = data;
}

function checkWindowResize() {
  window.onresize = function () {
    saveResizeAndRedisplay(1.5);
    canvas.height = canvas.scrollHeight;
    canvas.width = canvas.scrollWidth;
    drawRect("onmousedown");
  };
}

checkWindowResize();

function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();

  evt = event || window.event;

  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

let sizes = document.getElementById("input").value;

// EARASER function

// let size;

function drawRect(e) {
  let pos = getMousePos(canvas, "onmousedown");
  ctx.beginPath();

  findButton(pos.x, pos.y);

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

let dx = 0;
let dy = 0;
let xPositionArray = [];
let yPositionArray = [];

function fillAll() {
  canvas.onclick = function () {
    firstColorArr = [];

    e = event || window.event;
    mousePos = {
      x: e.clientX,
      y: e.clientY
    };

    let dx = mousePos.x;
    let dy = mousePos.y;
    let dr = 1;

    let pixelData = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;

    let pixelDataParent = ctx.getImageData(dx, dy, 1, 1);
    let pixelDataNew = pixelDataParent.data;

    findColorBootomRight();

    function findColorBootomRight() {
      requestAnimationFrame(findColorBootomRight);

      while (
        pixelDataNew[0] === pixelData[0] &&
        pixelDataNew[1] === pixelData[1] &&
        pixelDataNew[2] === pixelData[2] &&
        pixelDataNew[3] === pixelData[3] &&
        (dx > 0 || dy > 0) &&
        (dx < canvas.width || dy < canvas.height)
      ) {
        dx++;
        dy++;
        dr++;

        pixelDataParent = ctx.getImageData(dx, dy, 1, 1);
        pixelDataNew = pixelDataParent.data;

        xPositionArray.push(dx);
        yPositionArray.push(dy);

        ctx.beginPath();

        ctx.moveTo(mousePos.x, mousePos.y);
        ctx.lineTo(dx, dy);

        ctx.fill();
        ctx.stroke();
      }

      let tx = Math.max.apply(null, xPositionArray);
      let ty = Math.max.apply(null, yPositionArray);

      let testParentData = ctx.getImageData(tx, ty, 1, 1);
      let testPixelDataNew = testParentData.data;

      if (
        testPixelDataNew[0] != pixelData[0] &&
        testPixelDataNew[1] != pixelData[1] &&
        testPixelDataNew[2] != pixelData[2] &&
        testPixelDataNew[3] != pixelData[3] &&
        (dx > 0 || dy > 0) &&
        (dx < canvas.width || dy < canvas.height)
      ) {
        console.log("hbjnkm");
        tx--;
        ty--;
      } else if (
        testPixelDataNew[0] === pixelData[0] &&
        testPixelDataNew[1] === pixelData[1] &&
        testPixelDataNew[2] === pixelData[2] &&
        testPixelDataNew[3] === pixelData[3]
      ) {
        tx--;
        ty++;
      }
    }
  };
}

// FUNCTION FOR DRAWING LINES
canvas.onmousedown = function () {
  canvas.addEventListener("mousemove", drawRect, false);
  canvas.onmouseup = function () {
    xArray = [];
    yArray = [];
    canvas.removeEventListener("mousemove", drawRect);
  };
};