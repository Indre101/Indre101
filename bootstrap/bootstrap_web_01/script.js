const menuButtonIcon = document.getElementById("menuButtonIcon");
const landingPagePart = document.getElementById("landingPagePart");
const navbarSupportedContent = document.getElementById("navbarSupportedContent");

let menuClick = 0;

menuButtonIcon.onclick = function () {

  menuClick++
  landingPagePart.classList.add("after");

  menuButtonIcon.style.backgroundImage = "none";
  menuButtonIcon.innerHTML = "&times;"
  navbarSupportedContent.classList.remove("dissapeartoLeft");


  if (menuClick === 2) {
    menuClick = 0;
    menuButtonIcon.style.backgroundImage = "";
    menuButtonIcon.innerHTML = ""
    landingPagePart.classList.remove("after")
    navbarSupportedContent.classList.add("dissapeartoLeft");
  }


}
// content: "\f00d";
// content: "\f0c9";