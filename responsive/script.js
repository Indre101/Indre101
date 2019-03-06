let menuButton = document.getElementsByClassName("btn-mob-menu");

let myArray = Array.prototype.slice.call(menuButton);

console.log(menuButton)


let userHasScrolled = false;


window.onscroll = function () {
  // menuButton.style.opacity = 0.5;

  for (i in myArray) {

    myArray[i].style.opacity = 0.5;

    if (myArray[i].style.opacity = 0.5) {

      setTimeout(function () {
        myArray[i].style.opacity = 1;
      }, 2000);
    };
  }


}