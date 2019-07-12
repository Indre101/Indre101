// menu button to rotate

const menuExpandButton = document.querySelectorAll(".buttonExpand");


menuExpandButton.forEach(e => {
  e.onclick = function () {
    menuExpandButton.forEach(m => {
      m.classList.remove("menu-expand-button-clicked");
    });

    let colorBG = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");

    this.classList.add("menu-expand-button-clicked");

    if (colorBG === "rgb(239, 137, 235)") {
      this.classList.remove("menu-expand-button-clicked");
    }
  };
});

// burger menu functionality


const menuBlock = document.getElementById("menuBlock");
const burgerMenu = document.getElementById("burgerMenu");

let clickCount = 0;

burgerMenu.onclick = function () {

  clickCount++;
  menuBlock.classList.add("transitionFromleft");
  menuBlock.classList.remove("transitionToLeft");


  if (clickCount === 2) {
    clickCount = 0;
    menuBlock.classList.remove("transitionFromleft");
    menuBlock.classList.add("transitionToLeft");



  }

}