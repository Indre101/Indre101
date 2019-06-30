const menuButtonIcon = document.getElementById("menuButtonIcon");
const landingPagePart = document.getElementById("landingPagePart");

let menuClick = 0;

menuButtonIcon.onclick = function () {

  menuClick++
  landingPagePart.style.backgroundImage = "linear-gradient(rgba(40, 60, 200, 0.3), rgba(40, 60, 200, 0.3)), url(./img/landing-page-bg.jpg)"

  menuButtonIcon.style.backgroundImage = "none";
  menuButtonIcon.innerHTML = "&times;"

  if (menuClick === 2) {
    menuClick = 0;
    menuButtonIcon.style.backgroundImage = "";
    menuButtonIcon.innerHTML = ""
    landingPagePart.style.backgroundImage = ""



  }


}
// content: "\f00d";
// content: "\f0c9";