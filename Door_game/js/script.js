const landingPageContainer = document.getElementById("landingPageContainer");
const startGamePage = document.getElementById("startGamePage");
const startButton = document.getElementById("startButton");



console.log("hjæk")

// chaning background image 
// url('../images/images/bg_horror_v_2.jpg')
function changeBackground(x, u) {

  x.style.backgroundImage = u;

}


// function to display none

function displayNone(x) {
  x.style.display = "none"

}


// function to display block
function displayBlock(x) {

  x.style.display = "block"
}



// 
startButton.onclick = function () {



  let url1 = "url('./images/images/bg_2.jpg')"
  changeBackground(startGamePage, url1);
  displayNone(landingPageContainer)
  displayBlock(startGamePage)

}