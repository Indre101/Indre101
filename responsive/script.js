let menuButton = document.getElementById("saulBass");

console.log(menuButton)


let userHasScrolled = false;


window.onscroll = function () {
  // menuButton.style.opacity = 0.5;

  menuButton.style.opacity = 0.5;

  if (menuButton.style.opacity = 0.5) {

    setTimeout(function () {
      menuButton.style.opacity = 1;
    }, 2000);
  };


}