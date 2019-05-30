const menuButtons = document.querySelectorAll(".menuItem");



menuButtons.forEach((element) => {


  element.onmouseover = function () {
    element.style.borderRadius = "15px";
    element.style.boxShadow = `20px 20px ${randomColor()}`;

  }
  //   element.addEventListener("mouseover", randomColor)

  // }

});


menuButtons.forEach((element) => {


  element.onmouseout = function () {

    element.style.boxShadow = "";

  }
  //   element.addEventListener("mouseover", randomColor)

  // }

});


function randomColor() {


  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  let a = (Math.random() * 1);

  let colorCode = `rgb(${r}, ${g}, ${b}, ${a})`
  return colorCode
}
// 