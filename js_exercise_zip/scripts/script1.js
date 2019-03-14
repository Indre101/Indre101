const firstButton = document.getElementById("bt1");
const eaglePlane = document.getElementById("eagle");
const secondButton = document.getElementById("bt2");
const eaglePlane2 = document.getElementById("enterprice");
const check1 = document.getElementById("selectEagle");
const check2 = document.getElementById("selectEnterprice");
const thirdButton = document.getElementById("bt3");
const fourthButton = document.getElementById("bt4");
const imageBackground = document.getElementById("imagesection");

// function for turning around the plane
firstButton.onclick = function () {
  eaglePlane.classList.toggle("turn");

}


// function let both or one plane
secondButton.onclick = function () {

  if ((check1.checked) && (check2.checked)) {

    console.log(check1.checked, check2.checked)

    eaglePlane.classList.toggle("flyAway1");
    eaglePlane2.classList.toggle("flyAway2");

  } else if (check1.checked) {
    eaglePlane.classList.toggle("flyAway1");
  } else if (check2.checked) {
    eaglePlane2.classList.toggle("flyAway2");
  }

}

//changing the background

thirdButton.onclick = function () {

  imageBackground.classList.toggle("imageOf");
  // eaglePlane.classList.toggle("imageOf");

}
// change background

fourthButton.onclick = function () {

  eaglePlane.classList.toggle("gridLayout");
  eaglePlane.classList.toggle("gridLayout1");


}