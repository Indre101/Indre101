// canvas 

const menuItem3 = document.getElementById("menuItemPortfolio");
const menuItem = document.querySelectorAll(".projectItem");

window.onload = function () {
  menuItem.forEach((e) => {
    e.style.display = "none";

  })

}

// drawing starts
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;






function drawStarts() {
  for (let index = 0; index < 100; index++) {
    let randomStar = Math.floor(Math.random() * 100);
    let randomWidth = Math.random() * 3;
    let randomHeight = Math.random() * 3;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    ctx.fillStyle = "white";
    ctx.fillRect(x, y, randomWidth, randomHeight)


  }
}
drawStarts()



setInterval(() => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  drawStarts()
}, 3000);

// drawing starts




// soul Bass

// slder effect
// const arrow = document.getElementById("arrow");
const styleTileBass = document.getElementById("styleTileBass");
const saulBassIMG = document.querySelectorAll(".saulBassIMG")
const imageDisplay = document.getElementById("displayImagesSaulBassContainer")

let i = -1;
let a = 0;

// function to generate images to display in displayImagesSaulBassContainer


saulBassIMG.forEach((e) => {

  showImages(e)



})
// function to generate images to display in displayImagesSaulBassContainer

const textConatainer = document.getElementById("textConatainer");
const project1 = document.getElementById("textProject1");
const project2 = document.getElementById("textProject2");
const project3 = document.getElementById("textProject3");
const projectName = document.getElementById("projectName");
let textFieldsProject = document.querySelectorAll(".textAboutSoulBass");

let imageAraySoulBass = ["../Images_and_icons/saul_bass/bass1.png", "../Images_and_icons/saul_bass/style_tile.png", "../Images_and_icons/saul_bass/bass3.png", "../Images_and_icons/saul_bass/bass4.png", "../Images_and_icons/saul_bass/bass5.png", "../Images_and_icons/saul_bass/bass6.png", "../Images_and_icons/saul_bass/bass7.png", "../Images_and_icons/saul_bass/bass8.png"]
let spongebobImageArray = ["../Images_and_icons/spongebob/sponge1.png", "../Images_and_icons/spongebob/sponge2.png", "../Images_and_icons/spongebob/sponge3.png", "../Images_and_icons/spongebob/sponge4.png", "../Images_and_icons/spongebob/sponge5.png"]
let biking = ["../Images_and_icons/bicycle/biking1.png", "../Images_and_icons/bicycle/bikng2.png", "../Images_and_icons/bicycle/biking3.png", "../Images_and_icons/bicycle/biking4.png"]



document.getElementById("projectBTN_1").onclick = function () {



  takeImages(imageAraySoulBass)

  projectName.textContent = "Saul Bass responsive website"
  clickedProjectName(project1, imageAraySoulBass);


}


document.getElementById("projectBTN_2").onclick = function () {


  takeImages(spongebobImageArray)

  projectName.textContent = "Simple animation"

  clickedProjectName(project2, spongebobImageArray);

}
// 

document.getElementById("projectBTN_3").onclick = function () {


  takeImages(biking)
  clickedProjectName(project3, biking);


}

// function to add event once the project name is pressed

function clickedProjectName(pNToShow, ar) {


  textFieldsProject.forEach((l) => {
    l.style.display = "none";
  })

  // add Image to the display
  imageDisplay.innerHTML = "";

  let imageToShowOnceClicked = new Image();
  imageToShowOnceClicked.classList.add("saulBassIMG_1");
  imageToShowOnceClicked.src = ar[0];
  imageDisplay.appendChild(imageToShowOnceClicked);

  // 

  textConatainer.insertAdjacentElement("afterbegin", pNToShow)

  pNToShow.classList.add("textAnimation");
  pNToShow.style.display = "block";

}


// function to display generated images to in displayImagesSaulBassContainer

function takeImages(a) {

  styleTileBass.innerHTML = "";


  for (let m = 0; m < a.length; m++) {
    let newImage = new Image();
    newImage.src = a[m];
    newImage.classList.add("saulBassIMG");
    styleTileBass.appendChild(newImage);

    showImages(newImage)


  }
}

// function to display generated images to in displayImagesSaulBassContainer



// function to make images functioonal
function showImages(anImage) {


  anImage.onmouseover = function () {
    anImage.style.opacity = "0.5";

  }

  anImage.onmouseout = function () {
    anImage.style.opacity = "1";

  }



  anImage.onclick = function name() {


    anImage.style.opacity = "0.5";

    imageDisplay.innerHTML = "";
    var cln = anImage.cloneNode(true);

    cln.style.transform = "translate(0,0)"
    cln.style.height = "50vh";
    cln.style.width = "50vw";
    cln.style.opacity = "1";

    cln.style.objectFit = "contain";
    // cln.style.boxShadow = " 2vh 2vh 2vh black";
    imageDisplay.appendChild(cln);

    imageDisplay.classList.add("displayImagesSaulBass");

  }
}


// function to make images functioonal



menuItem3.onmouseover = function () {


  menuItem3.style.transition = "1s";
  menuItem3.style.transform = "rotate(0deg) skewX(0deg) translate(0,0)";
  menuItem3.style.transformOrigin = "left";
  menuItem3.style.perspective = "10000px";

  menuItem.forEach((e) => {
    e.style.transition = "3s";
    e.style.display = "block";
    e.classList.add("projectItem1")

  })




}



menuItemPortfolio.onmouseout = function () {

  menuItem3.style.transform = "rotate(-30deg) skewX(25deg) translate(0, 0)";

  menuItem.forEach((e) => {
    e.style.display = "none";

  })

}

// arrow.onclick = increase;

// function increase() {

//   a = a + 100


//   saulBassIMG.forEach((e) => {

//     moveUp(e, a)

//     if (a === 500) {
//       a = 0;
//       e.style.transform = `translateY(-${a}%) `;

//     }

//   })

// }

// function moveUp(b, c) {

//   b.style.transition = "0.5s";
//   b.style.transform = `translateY(-${c}%) `;

// }

// // slider 

// // arrow button behaviour

// arrow.onmousedown = function () {

//   buttonDown(arrow)

// }

// arrow.onmouseup = function () {
//   buttonUp(arrow)
// }

// // function to move a button down


// function buttonDown(btn) {

//   btn.classList.add("moveUp")

// }

// function buttonUp(btn) {

//   btn.classList.remove("moveUp")

// }