const landingPageContainer = document.getElementById("landingPageContainer");
const startGamePage = document.getElementById("startGamePage");
const popUpInstructionsContainer = document.getElementById("popUpInstructionsContainer");


const startButton = document.getElementById("startButton");
const infoButtonContainer = document.getElementById("infoButtonContainer");
const returnButtonContainer = document.getElementById("returnButtonContainer");






console.log("hjæk")

// chaning background image 
function changeBackground(x, u) {

  x.style.backgroundImage = u;

}


// function to toggle classes

function toggleClasses(x, c) {
  x.classList.toggle(c)

}

// class variables

let dBlock = "d-block";
let dNone = "d-none";


// 
startButton.onclick = function () {


  // start page changes to the game beginng
  let url1 = "url('./images/images/bg_2.jpg')"
  changeBackground(startGamePage, url1);
  toggleClasses(landingPageContainer, dNone);
  toggleClasses(startGamePage, dBlock);
  toggleClasses(startGamePage, dNone);
  // 


}

// instruction button 

infoButtonContainer.onclick = function () {
  toggleClasses(popUpInstructionsContainer, dNone);

}

// return button inside  pup up instructions 

returnButtonContainer.onclick = function () {
  toggleClasses(popUpInstructionsContainer, dNone);

}


// test for adding the doors function

const addDoorTest = document.getElementById("addDoorTest");


let styleOftheDoorContainer = window.getComputedStyle(document.querySelector("html"));
let colNum = parseInt(styleOftheDoorContainer.getPropertyValue("--colNum"));



addDoorTest.onclick = function () {
  document.documentElement.style.setProperty("--rowNum", 6);

}