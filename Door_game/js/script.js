const landingPageContainer = document.getElementById("landingPageContainer");
const startGamePage = document.getElementById("startGamePage");
const startButton = document.getElementById("startButton");



console.log("hjæk")

// chaning background image 
function changeBackground(x, u) {

  x.style.backgroundImage = u;

}


// function add class

function addClasses(x, c) {
  x.classList.add(c);

}


// function to remove class 
function removeClasses(x, c) {

  x.classList.remove(c);

}



// 
startButton.onclick = function () {

  let url1 = "url('./images/images/bg_2.jpg')"
  changeBackground(startGamePage, url1);
  addClasses(landingPageContainer, "d-none");
  addClasses(startGamePage, "d-block");
  removeClasses(startGamePage, "d-none");


}