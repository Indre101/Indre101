const breakBoundries = document.getElementById("boundriesButton"); // movement in and out of viewport


//function to make all the buttons change colors of background and font when clicked
let buttonArray = ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9", "button10", "button11", "button12", "button13", "button14", "button15"]; //creating an array from all the buttons
let newButtonArray = [];


////////// pushing the chosen button into the array;
buttonArray.forEach(function (element) {

  newButtonArray.push(document.getElementById(element));
});

//////////// function for changing color and skewX
const changeColor = (event) => {
  event.target.style.backgroundColor = "#006994";
  event.target.style.transform = "skewX(20deg)";

}

//////////// changing back the color and skewX
const regularColor = (event) => {

  event.target.style.backgroundColor = "";
  event.target.style.transform = "";
  event.target.style.webkitAnimationPlayState = "paused";
}


// using for each to iterate through array and make sure all the buttons are with blackbackground
// since forEach does not return a value I used found for storing and returning result

function checkIfAllareNotpressed() {

  let found;

  buttonArray.every(function (i) {

    if (document.getElementById(i).style.backgroundColor === "") {
      found = true;

      return found;
    } else if (document.getElementById(i).style.backgroundColor != "") {
      found = false;
      return found;
    }

  })
  return found;

}

///


/// object for having all target and class values

let motionArray = {
  0: {
    "class": "breakingBoundries",
    "target": "firstImage"
  },
  1: {
    "class": "move30",
    "target": "firstImage"
  },
  2: {
    "class": "movefrom30",
    "target": "firstImage"
  }
}


// function for playing animation takes the element idex and inserts it for taking properties from objcet
function playingAnimation(element) {


  let targetOfbutton = document.getElementById(motionArray[newButtonArray.indexOf(element)]["target"]);
  targetOfbutton.classList.add(motionArray[newButtonArray.indexOf(element)]["class"]);
}

// stopping animation

function stoppingAnimation(element) {
  let targetOfbutton = document.getElementById(motionArray[newButtonArray.indexOf(element)]["target"]);
  targetOfbutton.classList.remove(motionArray[newButtonArray.indexOf(element)]["class"]);
  targetOfbutton.classList.add("imageOption");

}



// creating a function to assing the click elements if the is statment is fulfilled
const changeBackandForth = function (element) {


  element.onclick = function () {
    if (checkIfAllareNotpressed()) {
      changeColor(event);
      console.log(newButtonArray.indexOf(element));
      playingAnimation(element);

    } else if (!checkIfAllareNotpressed()) {
      regularColor(event);
      stoppingAnimation(element);
    }

  }
}

newButtonArray.forEach(changeBackandForth);

////// finished the funtionality that only one button at the time would be pressed
/// assigning classes to the image element