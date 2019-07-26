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
const burgerMenuImage_2 = document.getElementById("burgerMenuImage_2");

let clickCount = 0;

burgerMenu.onclick = function () {

  clickCount++;

  // burger menu image changes
  burgerMenuImage_2.classList.toggle("opacity-0");
  burgerMenuImage.classList.toggle("opacity-0");
  // 


  // menu block appears
  menuBlock.classList.add("transitionFromleft");
  menuBlock.classList.remove("transitionToLeft");
  menuBlock.classList.remove("d-none");


  // menu block dissapears
  if (clickCount === 2) {
    clickCount = 0;
    menuBlock.classList.remove("transitionFromleft");
    menuBlock.classList.add("transitionToLeft");


    setTimeout(() => {
      menuBlock.classList.add("d-none");
    }, 300);
  }

}