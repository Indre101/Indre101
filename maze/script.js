const btnMaze = document.getElementById("btn3")


btnMaze.onclick = function () {
  // btnMaze.textContent = "Good Luck";
  console.log("kl")
  this.disabled = true;
  startMazeGame();
}

let template = [

  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0,
  1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0,
  1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
  0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, , 1,
  0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1,
  1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1,
  0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
  0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0,
  0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 0, 1, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0
];

const canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

const childRunning = new Image();
childRunning.src = "9c6bec818b.png";

let motherWating = new Image();
motherWating.src = "9c6bec818b.png";

let wall = new Image;

wall.src = "images.png";

let mazeLayoutGame = [];

let player = new Object({
  x: 0,
  y: 1,
  loc: 15,
  moves: 0
})



let x = 0;
let y = 0;

for (let i = 0; i < 15 * 15; i++) {

  mazeLayoutGame.push({
    "x": x,
    "y": y,
    "state": template[i]
  });
  if (x == 14) {
    y++;
    x = 0;
  } else {
    x++;
  }
}

function keyPress(e) {

  switch (e.which) {
    case 39: // right 

      if (player.x != 14) {

        player.loc++;
        if (mazeLayoutGame[player.loc].state != 1) {
          ctx.clearRect(player.x * 32, player.y * 32, 32, 32);
          player.x++;
          player.moves++;

        } else {
          player.loc--;

        }
      }
      break;

    case 37: // left 
      if (player.x != 0) {
        player.loc--;

        if (mazeLayoutGame[player.loc].state != 1) {
          ctx.clearRect(player.x * 32, player.y * 32, 32, 32);
          player.x--;
          player.moves++;
        } else {
          player.loc++;
        }
      }
      break;

    case 40: // down 
      if (player.y != 14) {
        player.loc += 15;
        if (mazeLayoutGame[player.loc].state != 1) {
          ctx.clearRect(player.x * 32, player.y * 32, 32, 32);
          player.y++;
          player.moves++;
        } else {
          player.loc -= 15;
        }
      }
      break;

    case 38: // up 
      if (player.y != 0) {
        player.loc -= 15;
        if (mazeLayoutGame[player.loc].state != 1) {
          ctx.clearRect(player.x * 32, player.y * 32, 32, 32);
          player.y--;
          player.moves++;
        } else {
          player.loc += 15;
        }
      }
      break;
  }

  ctx.drawImage(childRunning, player.x * 32, player.y * 32, 32, 32);
  if (mazeLayoutGame[player.loc].state == 2) {

    console.log("you win")





    location.reload();
  }

}

function startMazeGame() {
  console.log("true")
  for (let i = 0; i < 15 * 15; i++) {

    if (mazeLayoutGame[i].state == 1 || mazeLayoutGame[i].state == "1") {
      console.log("pirmas if")
      ctx.drawImage(wall, mazeLayoutGame[i].x * 32, mazeLayoutGame[i].y * 32, 32, 32);
    }

    if (mazeLayoutGame[i].state == 2 || mazeLayoutGame[i].state == "2") {
      console.log("antras if")

      ctx.drawImage(motherWating, mazeLayoutGame[i].x * 32, mazeLayoutGame[i].y * 32, 32, 32);
    }

  }
  ctx.drawImage(childRunning, player.x * 32, player.y * 32, 32, 32);

  window.addEventListener("keydown", keyPress, true);

}