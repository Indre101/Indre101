const menuButtonIcon = document.getElementById("menuButtonIcon");
const landingPagePart = document.getElementById("page1");
const navbarSupportedContent = document.getElementById("navbarToggler01");

let menuClick = 0;

menuButtonIcon.onclick = function () {

  menuClick++

  landingPagePart.classList.add("after");
  menuButtonIcon.style.backgroundImage = "none";
  menuButtonIcon.innerHTML = "&times;"
  navbarSupportedContent.style.display = "block";

  navbarSupportedContent.classList.remove("dissapeartoLeft");


  if (menuClick === 2) {
    menuClick = 0;
    menuButtonIcon.style.backgroundImage = "";
    navbarSupportedContent.classList.add("dissapeartoLeft");
    menuButtonIcon.innerHTML = ""

    landingPagePart.classList.remove("after")
  }


}
// content: "\f00d";
// content: "\f0c9";