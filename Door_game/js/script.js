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

// test button
const addDoorTest = document.getElementById("addDoorTest");


// declared variables for function to add another column once level up
const htmlColumn = window.getComputedStyle(document.querySelector("html"));
const doorContainer = document.getElementById("styleOftheDoorContainer");
const colNum = parseInt(htmlColumn.getPropertyValue("--colNum"));
let columnNumber = colNum

let gameDoor = document.querySelectorAll(".entrance")




let testWords = ["khg", "sad", "ojkæ", "kjhm", "jæk", "1", "2", "3", "4", "5", "6", "7", "8", "9"];







// function to add another grid column
addDoorTest.onclick = function () {




  columnNumber++
  document.documentElement.style.setProperty("--colNum", columnNumber);


  let elmnt = document.querySelector(".entrance");
  let cln = elmnt.cloneNode(true);
  doorContainer.appendChild(cln);


  // let newDoor = document.createElement("<div class=" + "entrance" + "><img  class=" + "doors  frame-w " + " src=" + "./images/images/door-frame_v_3.png" + " alt=" + "><img  class=" + "doors door-w door-animation" + " src=" + "./images/images/door_2_1.png" + "><h2 class=" + "testWord" + "></h2></div>");

  // doorContainer.appendChild(newDoor);

  let testWordsElements = document.querySelectorAll(".testWord")


  testWordsElements.forEach((e) => {
    let randomNumber = Math.floor(Math.random() * testWords.length);


    e.innerHTML = testWords[randomNumber];
  })


  // gameDoor.forEach((e) => {
  //   let randomNumber = Math.floor(Math.random() * testWords.length);


  //   let testWord = document.createElement("p");


  //   testWord.textContent = testWords[randomNumber];
  //   cln.appendChild(testWord);
  //   e.appendChild(testWord);
  // })


}