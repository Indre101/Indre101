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
  changeBackground(document.querySelector("body"), url1);
  toggleClasses(landingPageContainer, dNone);
  toggleClasses(startGamePage, dBlock);
  toggleClasses(startGamePage, dNone);
  assignImage();
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


//TEST TO ADD THE DOORS 

// test button
const addDoorTest = document.getElementById("addDoorTest");


// declared variables for function to add another column once level up
const htmlColumn = window.getComputedStyle(document.querySelector("html"));
const doorContainer = document.getElementById("styleOftheDoorContainer");


const colNum = parseInt(htmlColumn.getPropertyValue("--colNum"));
let columnNumber = colNum

// let gameDoor = document.querySelectorAll(".entrance")







// function to add another grid column
addDoorTest.onclick = function () {


  let doorsOpening = document.querySelectorAll(".open");


  columnNumber++
  document.documentElement.style.setProperty("--colNum", columnNumber);


  let elmnt = document.querySelector(".entrance");
  let cln = elmnt.cloneNode(true);
  doorContainer.appendChild(cln);
  console.log(doorsOpening)

}

// DOOR FLIPPING FUNCTION


let imgBehidDoors = document.querySelectorAll(".imgBehidDoors")
let doorsOpening = document.querySelectorAll(".open");
let doorsOpeningArr = Array.prototype.slice.call(doorsOpening);


function addClass(x, a) {

  x.classList.add(a)

}

function removeClass(x, a) {

  x.classList.remove(a);

}




doorsOpening.forEach((f) => {





  f.onclick = function () {

    let a = doorsOpeningArr.indexOf(this)
    console.log(a)

    addClass(this, "door-animation")


    imgBehidDoors.forEach((x) => {


      imgBehidDoors[a].classList.add("inf")

      // x.classList.toggle("inf")
    })

  }

  // 
})





// function to assign images


let imgSrc1 = "./images/images/bunny_1.png"
let imgSrc2 = "./images/images/bunny_2.png"
let imgSrc3 = "./images/images/puppy_1.png"

let inf1 = "./images/images/in_1.png";
let inf2 = "./images/images/in_2.png";




let goodImg = [imgSrc1, imgSrc2, imgSrc3];
let looseImg = [inf1, inf2];




function assignImage() {

  let imgBehidDoors = document.querySelectorAll(".imgBehidDoors")
  let behidDoorsNumber = Math.floor(Math.random() * imgBehidDoors.length);





  imgBehidDoors[behidDoorsNumber].src = goodImg[Math.floor(Math.random() * goodImg.length)]

  imgBehidDoors.forEach((e) => {
    // e.src = testImg[randomNumber];

    if (e.src === "") {

      e.src = looseImg[Math.floor(Math.random() * looseImg.length)]
    }

  })
}

assignImage()