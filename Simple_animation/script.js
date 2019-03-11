let firstImage = document.getElementById("firstImgae"); //first spongebob image for moving in and out of viewport
const breakBoundries = document.getElementById("boundriesButton"); // movement in and out of viewport


//function to make all the buttons change colors of background and font when clicked
let buttonArray = ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9", "button10", "button11", "button12", "button13", "button14", "button15"]; //creating an array from all the buttons
let newButtonArray = [];



buttonArray.forEach(function (element) {

  newButtonArray.push(document.getElementById(element));
});


const changeColor = (event) => {
  event.target.style.backgroundColor = "#006994";
  event.target.style.transform = "skewX(20deg)";
}

const regularColor = (event) => {

  event.target.style.backgroundColor = "";
  event.target.style.transform = "";


}

const changeBackandForth = function (element) {


  element.onclick = function () {
    if (element.style.backgroundColor === "") {
      console.log(element.style.backgroundColor);
      changeColor(event);

    } else if (element.style.backgroundColor != "") {
      console.log(element.style.backgroundColor);

      regularColor(event);
    }

  }
}

newButtonArray.forEach(changeBackandForth);