let firstImage = document.getElementById("firstImgae"); //first spongebob image for moving in and out of viewport
let allButtons = document.getElementsByClassName("movementButton"); /// all the buttons for movement
const breakBoundries = document.getElementById("boundriesButton"); // movement in and out of viewport

let buttonArray = Array.prototype.slice.call(allButtons); //creating an array from all the buttons


//function to make all the buttons change colors of background and font when clicked


function changeButton(element) {

  buttonArray.forEach(function (element) {
    element.style.backgroundColor = "white";
  });


}

breakBoundries.onclick = function () {

  firstImage.style.animation = "breakBoundries";
  firstImage.style.animationIterationCount = "infinite";
  firstImage.style.animationDuration = "3s";
  changeButton(element);

}