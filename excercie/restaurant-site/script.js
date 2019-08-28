const catogoriesContainer = document.querySelector(".catogoriesContainer");
const menuBtn = document.getElementById("menuBtn")
console.log(menuBtn)

// FUNCTION TO TOGGLE CLASSES
function toggleClass(element, className) {

  element.classList.toggle(className)

}


// MEDIA QUERY TO ADD CLASSES

function media_q() {
  if (window.innerWidth <= 500) {
    toggleClass(catogoriesContainer, "d-flex")
    toggleClass(catogoriesContainer, "d-none")
  }
}
media_q()


// COUNTER

// MENU BUTTON FUNCTION

menuBtn.onclick = function () {

  toggleClass(catogoriesContainer, "d-none");
  toggleClass(catogoriesContainer, "slideIn");

}