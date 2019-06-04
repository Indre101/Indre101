let canvas = document.getElementById("canvas");
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
// let ctx = canvas.getContext("2d");
// context.drawImage(image, 0, 0, );

// ctx.clearRect();
window.onload = function() {
  let ctx = canvas.getContext("2d");

  let img_1 = new Image();
  // img_1.style.objectFit = "contain";

  img_1.onload = function() {
    let tempCanvas = document.createElement("canvas");
    let tempCtx = tempCanvas.getContext("2d");
    // tempCanvas.classList.add("canvas");

    tempCanvas.width = 600;
    tempCanvas.height = 500;

    tempCtx.drawImage(img_1, 0, 0, tempCanvas.width, tempCanvas.height);
    // ctx.drawImage(img_1, 0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        let x = i * 40;
        let y = j * 40;

        ctx.drawImage(tempCanvas, x, y, 40, 40, x + i * 5, y, 40, 40);
      }
    }
  };
  img_1.src = "./img/naujas.jpg";
};
