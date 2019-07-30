const landingPageContainer = document.getElementById("landingPageContainer");
const startGamePage = document.getElementById("startGamePage");
const startButton = document.getElementById("startButton");



console.log("hjæk")

// chaning background image 
function changeBackground(x, u) {

  x.style.backgroundImage = u;

}


// function add class

function toggleClasses(x, c) {
  x.classList.toggle(c)

}


// function to remove class 
// function removeClasses(x, c) {

//   x.classList.remove(c);

// }



// 
startButton.onclick = function () {

  let url1 = "url('./images/images/bg_2.jpg')"
  changeBackground(startGamePage, url1);
  toggleClasses(landingPageContainer, "d-none");
  toggleClasses(startGamePage, "d-block");
  toggleClasses(startGamePage, "d-none");


}