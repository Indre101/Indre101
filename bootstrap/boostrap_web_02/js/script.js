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



// Mobile menu to appear and close


const menuBlock = document.getElementById("menuBlock");
const burgerMenu = document.getElementById("burgerMenu");
const burgerMenuImage = document.getElementById("burgerMenuImage");
let clickCount = 0;

burgerMenu.onclick = function () {

  clickCount++;
  // burgerMenuImage.src = "../img/icons/anx_w.svg"
  menuBlock.classList.add("transitionFromleft");
  menuBlock.classList.remove("transitionToLeft");
  menuBlock.classList.remove("d-none");


  if (clickCount === 2) {
    clickCount = 0;
    menuBlock.classList.remove("transitionFromleft");
    menuBlock.classList.add("transitionToLeft");
    // burgerMenuImage.src = "../img/icons/burgermenu_w.svg"


    setTimeout(() => {
      menuBlock.classList.add("d-none");
    }, 300);




  }

}