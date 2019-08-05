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


function addClass(x, a) {

  x.classList.add(a)

}

function removeClass(x, a) {

  x.classList.remove(a);

}

// function to clear img src;

function clearImgSrc(x) {
  x.src = "";

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

  // assigns first level img
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



// function to add another grid and another column and frame-door element 
function winScenario() {

  let doorsOpening = document.querySelectorAll(".open");


  columnNumber++
  document.documentElement.style.setProperty("--colNum", columnNumber);


  let elmnt = document.querySelector(".entrance");
  let cln = elmnt.cloneNode(true);
  doorContainer.appendChild(cln);
  cln.querySelectorAll('img')[3].classList.remove("door-animation")





}


function recountDoors() {
  let doorsOpening = document.querySelectorAll(".open");
  return doorsOpening;

}

let doorsOpening = recountDoors();



let imgBehidDoors = document.querySelectorAll(".imgBehidDoors")
let doorsOpeningArr = Array.prototype.slice.call(doorsOpening);









// function to assign images


// let imgSrc1 = 
// let imgSrc2 = 
// let imgSrc3 = 

let inf1 = "./images/images/in_1.png";
let inf2 = "./images/images/in_2.png";




let goodImg = ["./images/images/bunny_1.png", "./images/images/bunny_2.png", "./images/images/puppy_1.png"];
let looseImg = [inf1, inf2];

function assignImage() {
  let imgBehidDoors = document.querySelectorAll(".imgBehidDoors")
  let behidDoorsNumber = Math.floor(Math.random() * imgBehidDoors.length);
  imgBehidDoors[behidDoorsNumber].src = goodImg[Math.floor(Math.random() * goodImg.length)]

  imgBehidDoors.forEach((e) => {

    if (e.src === "") {

      e.src = looseImg[Math.floor(Math.random() * looseImg.length)]
      // console.log(e.src)
    }

  })
}

assignImage()


// numer to follow win count
let state = "";
let openDoorsCount = 0;



// doors clicked adds a animation class to the img behid doors
function doorsOpeningFunction() {


  recountDoors()

  doorsOpening.forEach((f) => {


    f.onclick = function () {
      openDoorsCount++;

      let a = doorsOpeningArr.indexOf(this)
      addClass(this, "door-animation")
      imgBehidDoors[a].classList.add("inf")


      // win or loose
      if (goodImg.includes(imgBehidDoors[a].getAttribute('src'))) {


        winScenario();

        console.log("next phase")




      } else if (looseImg.includes(imgBehidDoors[a].getAttribute('src'))) {
        console.log("flase")
      }

    }

  })
}


doorsOpeningFunction();