const menuButton = document.getElementById("menuButton");
const menuButtonIcon = document.getElementById("menuButtonIcon");
const landingPagePart = document.getElementById("page1");
const navbarSupportedContent = document.getElementById("navbarToggler01");

let menuClick = 0;

menuButton.onclick = function () {

  menuClick++

  landingPagePart.classList.add("after");
  menuButtonIcon.style.backgroundImage = "none";
  navbarSupportedContent.style.display = "block";
  menuButtonIcon.src = "./img/anX.svg";



  navbarSupportedContent.classList.remove("dissapeartoLeft");


  if (menuClick === 2) {

    menuClick = 0;
    navbarSupportedContent.classList.add("dissapeartoLeft");
    menuButtonIcon.src = "./img/burger.svg";

    landingPagePart.classList.remove("after")
  }


}


window.onscroll = function () {

  document.getElementById("nav").classList.add("bg-nav");

}
// content: "\f00d";
// content: "\f0c9";