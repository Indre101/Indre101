const circleMenu = document.getElementById("circle");


circleMenu.addEventListener("animationend", checkAnimation, false)

function checkAnimation(event) {

  switch (event.type) {
    case "animationend":
      circleMenu.style.backgroundColor = "black";
      break;

  }

}