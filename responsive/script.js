let menuButton = document.getElementsByClassName("btn-mob-menu");
let firstMenu = document.getElementById("firstMenu");
let houseButton = document.getElementById("houseButton");
let shapeContainer = document.getElementById("shapeContainer");

let myArray = Array.prototype.slice.call(menuButton);
let userHasScrolled = false;

window.onscroll = function () {

  for (i in myArray) {

    myArray[i].style.opacity = 0.5;

    if (myArray[i].style.opacity = 0.5) {

      setTimeout(function () {
        myArray[i].style.opacity = 1;
      }, 2000);
    };
  }


}

houseButton.onclick = function () {

  firstMenu.style.position = "fixed";
  // firstMenu.style.top = "530px";
  firstMenu.style.bottom = "0";
  shapeContainer.style.height = "700px";

  firstMenu.style.width = "97%";
  firstMenu.style.opacity = 0.5;
  firstMenu.style.marginTop = "100px";
  firstMenu.style.zIndex = -1;

  // firstMenu.style.marginBottom = "-100px";





}

firstMenu.onclick = function () {

  firstMenu.style.position = "";
  firstMenu.style.opacity = 1;
  shapeContainer.style.height = "";



}