const menuButtonIcon = document.getElementById("menuButtonIcon");


let menuClick = 0;

menuButtonIcon.onclick = function () {

  menuClick++

  menuButtonIcon.style.backgroundImage = "none";
  menuButtonIcon.innerHTML = "&times;"

  if (menuClick === 2) {
    menuClick = 0;
    menuButtonIcon.style.backgroundImage = "";
    menuButtonIcon.innerHTML = ""
  }


}